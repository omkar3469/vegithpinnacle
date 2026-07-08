from fastapi import FastAPI, APIRouter, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import html as html_lib
import msal
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ---------- Microsoft Graph — Contact Form Email ----------
MS_TENANT_ID = os.environ.get("MS_TENANT_ID")
MS_CLIENT_ID = os.environ.get("MS_CLIENT_ID")
MS_CLIENT_SECRET = os.environ.get("MS_CLIENT_SECRET")
MS_SENDER_EMAIL = os.environ.get("MS_SENDER_EMAIL")
MS_RECIPIENT_EMAIL = os.environ.get("MS_RECIPIENT_EMAIL")

_msal_app: Optional[msal.ConfidentialClientApplication] = None
if MS_TENANT_ID and MS_CLIENT_ID and MS_CLIENT_SECRET:
    _msal_app = msal.ConfidentialClientApplication(
        MS_CLIENT_ID,
        authority=f"https://login.microsoftonline.com/{MS_TENANT_ID}",
        client_credential=MS_CLIENT_SECRET,
    )

GRAPH_SCOPES = ["https://graph.microsoft.com/.default"]


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: str = Field(default="", max_length=200)
    interest: str = Field(default="", max_length=120)
    message: str = Field(min_length=1, max_length=5000)


def _acquire_graph_token() -> str:
    if not _msal_app:
        raise HTTPException(status_code=500, detail="Microsoft Graph is not configured on the server.")
    result = _msal_app.acquire_token_silent(GRAPH_SCOPES, account=None)
    if not result:
        result = _msal_app.acquire_token_for_client(scopes=GRAPH_SCOPES)
    if not isinstance(result, dict) or "access_token" not in result:
        err = (result or {}).get("error_description") or (result or {}).get("error") or "unknown"
        logger.error("Graph token acquisition failed: %s", err)
        raise HTTPException(status_code=502, detail="Failed to authenticate with Microsoft Graph.")
    return result["access_token"]


def _render_contact_email(data: ContactRequest) -> str:
    esc = html_lib.escape
    message_html = esc(data.message).replace("\n", "<br/>")
    return f"""
    <div style="font-family:Manrope,Arial,sans-serif;background:#f6f8ff;padding:32px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px -12px rgba(11,29,58,0.18);">
        <div style="background:linear-gradient(135deg,#0b1d3a 0%,#14387f 60%,#2563eb 100%);padding:28px 32px;color:#ffffff;">
          <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#f0c454;font-weight:700;">Vegith Pinnacle · Website Enquiry</div>
          <div style="font-family:'Playfair Display',Georgia,serif;font-size:28px;margin-top:6px;">New Contact Form Submission</div>
        </div>
        <div style="padding:28px 32px;color:#0b1d3a;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#0b1d3a99;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">{esc(data.name)}</td></tr>
            <tr><td style="padding:8px 0;color:#0b1d3a99;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:{esc(data.email)}" style="color:#14387f;text-decoration:none;">{esc(data.email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#0b1d3a99;">Company</td><td style="padding:8px 0;font-weight:600;">{esc(data.company) or '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#0b1d3a99;">Interest</td><td style="padding:8px 0;font-weight:600;">{esc(data.interest) or '—'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:18px 20px;background:#f6f8ff;border-left:3px solid #d4a843;border-radius:8px;color:#0b1d3a;line-height:1.6;">
            {message_html}
          </div>
          <div style="margin-top:28px;font-size:12px;color:#0b1d3a80;">
            Received on {datetime.now(timezone.utc).strftime('%d %b %Y, %H:%M UTC')} · Reply directly to respond to the sender.
          </div>
        </div>
      </div>
    </div>
    """


@api_router.post("/contact")
async def submit_contact(data: ContactRequest):
    if not (MS_SENDER_EMAIL and MS_RECIPIENT_EMAIL):
        raise HTTPException(status_code=500, detail="Contact mailer is not configured.")

    token = _acquire_graph_token()

    payload = {
        "message": {
            "subject": f"Contact Enquiry — {data.name}" + (f" · {data.company}" if data.company else ""),
            "body": {"contentType": "HTML", "content": _render_contact_email(data)},
            "toRecipients": [{"emailAddress": {"address": MS_RECIPIENT_EMAIL}}],
            "replyTo": [{"emailAddress": {"address": str(data.email), "name": data.name}}],
        },
        "saveToSentItems": "true",
    }

    endpoint = f"https://graph.microsoft.com/v1.0/users/{MS_SENDER_EMAIL}/sendMail"
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

    try:
        async with httpx.AsyncClient(timeout=20) as client_http:
            resp = await client_http.post(endpoint, headers=headers, json=payload)
    except httpx.HTTPError as e:
        logger.exception("Graph sendMail network error")
        raise HTTPException(status_code=502, detail="Could not reach Microsoft Graph.") from e

    if resp.status_code != 202:
        logger.error("Graph sendMail failed %s: %s", resp.status_code, resp.text)
        raise HTTPException(status_code=502, detail="Email delivery failed. Please try again shortly.")

    return {"status": "success", "message": "Your enquiry has been sent. Our team will respond within 24 hours."}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()