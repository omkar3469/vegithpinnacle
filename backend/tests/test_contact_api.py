"""Vegith Pinnacle - Contact API + basic health tests (iteration 2)."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://staffing-fm-portal.preview.emergentagent.com").rstrip("/")


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health / root ---
class TestHealth:
    def test_root(self, api):
        r = api.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# --- Contact endpoint (Microsoft Graph mailer) ---
class TestContact:
    def test_contact_success(self, api):
        payload = {
            "name": "TEST_QA Iter2",
            "email": "qa.iter2@example.com",
            "company": "QA Automation",
            "interest": "Both Pillars",
            "message": "Automated pytest check for /api/contact after visual redesign. Please ignore.",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200, f"Body: {r.text}"
        data = r.json()
        assert data.get("status") == "success"
        assert "message" in data and isinstance(data["message"], str) and len(data["message"]) > 0

    def test_contact_missing_required_fields(self, api):
        # empty name/email/message -> pydantic 422
        r = api.post(f"{BASE_URL}/api/contact", json={"name": "", "email": "", "message": ""}, timeout=15)
        assert r.status_code == 422

    def test_contact_invalid_email(self, api):
        payload = {
            "name": "TEST User",
            "email": "not-an-email",
            "message": "test",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_contact_minimum_payload(self, api):
        # Only required fields, empty optional company/interest
        payload = {
            "name": "TEST Minimal",
            "email": "minimal@example.com",
            "message": "Minimal payload test.",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200
        assert r.json().get("status") == "success"
