// Content + imagery for Vegith Pinnacle Services website
// All image URLs point to editorial-quality Unsplash/Pexels photographs.
// They are placeholders — swap the `img` value in each entry with the
// client's own photographs after development.

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Compliance", to: "/compliance" },
  // { label: "Industries", to: "/industries" },
  { label: "Industries", to: "/Industries" },
  { label: "Contact", to: "/contact" },
];

/* Homepage stats — counter animation */
export const HOME_COUNTERS = [
  { value: 500, suffix: "+", label: "Employees Deployed" },
  { value: 25, suffix: "+", label: "Enterprise Clients" },
  { value: 3, suffix: "", label: "India Offices" },
  { value: 6, suffix: "+", label: "Years of Delivery" },
];

/* ---------- HERO ---------- */
export const HERO_STATS = [
  { k: "6+", l: "Years of Delivery" },
  { k: "PAN", l: "India Coverage" },
  { k: "24/7", l: "Operations Desk" },
];

/* ---------- ABOUT ---------- */
export const ABOUT_STATS = [
  { k: "500+", l: "Employees Deployed" },
  { k: "PAN India", l: "Operations" },
  { k: "Enterprise", l: "Grade Support" },
];

/* ---------- WHY US — image-based feature cards ---------- */
export const WHY_US = [
  {
    title: "Comprehensive Solutions",
    tagline: "One partner across manpower & facilities.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "24 × 7 Support",
    tagline: "Always-on operations desk.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Client-Centric",
    tagline: "Every SOP shaped to your scope.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cost Efficiency",
    tagline: "Optimised deployment models.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Compliance & Safety",
    tagline: "Audit-ready statutory shield.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Managed by Professionals",
    tagline: "HR & FM veterans, senior led.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
  },
];

/* ---------- STAFFING (icon list within Pillar 1) ---------- */
export const STAFFING_ITEMS = [
  { title: "Temporary Staffing", icon: "Users" },
  { title: "Permanent Staffing", icon: "UserCheck" },
  { title: "Payroll Processing", icon: "Banknote" },
  { title: "Recruitment", icon: "Search" },
  { title: "HR Operations", icon: "Briefcase" },
  { title: "Workforce Deployment", icon: "Send" },
  { title: "Time & Attendance", icon: "Clock" },
  { title: "Compliance", icon: "ShieldCheck" },
  { title: "PAN India Staffing", icon: "MapPin" },
];

/* ---------- FACILITY MANAGEMENT (grouped accordion within Pillar 2) ---------- */
export const FACILITY_GROUPS = [
  {
    key: "soft",
    label: "Soft Services",
    tagline: "The everyday workplace experience.",
    items: [
      "Housekeeping",
      "Pantry Services",
      "Front Office",
      "Mail Room Operations",
      "Driver Services",
      "Garden Maintenance",
      "Security Services",
    ],
  },
  {
    key: "technical",
    label: "Technical Services",
    tagline: "Engineering reliability behind the building.",
    items: [
      "HVAC Management",
      "Electrical Operations",
      "Plumbing Operations",
      "Water Management",
      "Fire Safety",
      "CCTV Operations",
      "Escalator Maintenance",
      "Air Compressor Operations",
      "Boiler Operations",
    ],
  },
  {
    key: "specialized",
    label: "Specialized Services",
    tagline: "Precision cleaning that redefines your space.",
    items: [
      "Pest Control",
      "Façade Cleaning",
      "Marble Polishing",
      "Washroom Deep Cleaning",
      "Carpet Cleaning",
      "Sofa & Chair Shampooing",
      "Cafeteria Deep Cleaning",
      "Express Cleaning",
    ],
  },
];

/* ---------- COMPLIANCE ---------- */
export const COMPLIANCE_ITEMS = [
  { code: "PF", title: "Provident Fund", icon: "Banknote" },
  { code: "ESIC", title: "ESIC", icon: "HeartPulse" },
  { code: "PT", title: "Professional Tax", icon: "ReceiptText" },
  { code: "LWF", title: "Labour Welfare", icon: "HandCoins" },
  { code: "PAY", title: "Payroll Compliance", icon: "FileSpreadsheet" },
  { code: "UAN", title: "UAN Activation", icon: "Fingerprint" },
  { code: "KYC", title: "KYC Updates", icon: "IdCard" },
  { code: "ECR", title: "ECR Challan", icon: "FileCheck2" },
  { code: "CLM", title: "Claims Processing", icon: "FolderCheck" },
  { code: "INS", title: "Inspection Support", icon: "SearchCheck" },
  { code: "REG", title: "Online Registration", icon: "MonitorCheck" },
  { code: "RET", title: "Return Filing", icon: "ClipboardList" },
];

/* ---------- PROCESS ---------- */
export const PROCESS_STEPS = [
  {
    title: "Client Requirement",
    tagline: "Deep-dive scoping & discovery.",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Recruitment",
    tagline: "Sourcing & screening pipelines.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Selection",
    tagline: "Interviews, BGV & documentation.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Deployment",
    tagline: "Onboarding & site mobilisation.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Operations",
    tagline: "Daily service delivery & QA.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Compliance",
    tagline: "Statutory returns & audits.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Support",
    tagline: "Ongoing 24×7 helpdesk.",
    img: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ---------- INDUSTRIES ---------- */
export const INDUSTRIES = [
  {
    name: "Manufacturing",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Warehousing",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Corporate Offices",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  // {
  //   name: "Healthcare",
  //   img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  // },
  {
    name: "Retail",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  // {
  //   name: "Education",
  //   img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  // },
  {
    name: "Hospitality",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Logistics",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ---------- SERVICES (Unify-inspired 4 pillars) ---------- */
export const SERVICE_PILLARS = [
  {
    key: "staffing",
    title: "Staffing Services",
    tagline: "Manpower engineered for scale",
    desc: "Temporary, permanent, payroll & pan-India workforce mobilisation for enterprises.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    background:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    items: [
      "Temporary Staffing",
      "Permanent Staffing",
      "Payroll Processing",
      "Recruitment Support",
      "HR Operations",
      "Workforce Deployment",
      "Time & Attendance",
      "Compliance Management",
      "PAN India Staffing",
    ],
  },
  {
    key: "soft",
    title: "Soft Services",
    tagline: "The everyday workplace experience",
    desc: "Housekeeping, pantry, front office and support staff for a spotless workplace.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    background:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1600&q=80",
    items: [
      "Housekeeping",
      "Pantry Services",
      "Front Office",
      "Mail Room Operations",
      "Driver Services",
      "Garden Maintenance",
      "Security Services",
    ],
  },
  {
    key: "technical",
    title: "Technical Services",
    tagline: "Engineering the reliability behind buildings",
    desc: "HVAC, electrical, plumbing, fire safety and asset upkeep by licensed engineers.",
    img: "https://images.unsplash.com/photo-1581092919535-f1b0f4b6d1d8?auto=format&fit=crop&w=1600&q=80",
    background:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=80",
    items: [
      "HVAC Management",
      "Electrical Operations",
      "Plumbing Operations",
      "Water Management",
      "Fire Safety",
      "CCTV Operations",
      "Escalator Maintenance",
      "Air Compressor Operations",
      "Boiler Operations",
    ],
  },
  {
    key: "specialized",
    title: "Specialised Services",
    tagline: "Precision cleaning that redefines your space",
    desc: "High-rise, marble, deep cleaning and pest control for premium workplaces.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    background:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1600&q=80",
    items: [
      "Pest Control",
      "Façade Cleaning",
      "Marble Polishing",
      "Washroom Deep Cleaning",
      "Carpet Cleaning",
      "Sofa & Chair Shampooing",
      "Cafeteria Deep Cleaning",
      "Express Cleaning",
    ],
  },
];

/* ---------- CLIENTS — Unify-style category strips ---------- */
export const CLIENT_CATEGORIES = [
  {
    key: "corporates",
    label: "Corporate & IT/ITES",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "warehousing",
    label: "Warehousing & Logistics",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "manufacturing",
    label: "Manufacturing",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "retail",
    label: "Retail & Malls",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  },
  // {
  //   key: "healthcare",
  //   label: "Healthcare",
  //   img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
  // },
  {
    key: "hospitality",
    label: "Hospitality",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "bfsi",
    label: "BFSI",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  // {
  //   key: "education",
  //   label: "Education",
  //   img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
  // },
];

export const CLIENT_TAGS = [
  "Fortune-listed Corporates",
  "Global IT / ITES Leaders",
  "Multi-city Manufacturers",
  "Warehousing Giants",
  "Retail & QSR Chains",
  "Healthcare Networks",
  "Luxury Hospitality",
  "Educational Groups",
  "BFSI Enterprises",
  "E-Commerce Majors",
];

/* ---------- OFFICES ---------- */
export const OFFICES = [
  {
    city: "Mumbai",
    role: "Corporate Office",
    // approx normalized coord for stylised India map (viewBox 0 0 400 480)
    x: 100,
    y: 300,
    address:
      "761, Solitaire Business Park, Andheri Ghatkopar Link Road, Chakala, Opposite Mirador Hotel, Andheri East, Mumbai 400093, Maharashtra",
  },
  {
    city: "Bhiwandi",
    role: "Operations Hub",
    // Real coord ~(110,290) — visually offset NE with leader line to prevent
    // overlap with the Mumbai marker on the stylised SVG.
    x: 175,
    y: 258,
    anchorX: 110,
    anchorY: 290,
    address:
      "Yewai, Bhiwandi, District Thane, 421302, Maharashtra",
  },
  {
    city: "Kolkata",
    role: "Regional Office",
    x: 285,
    y: 235,
    address:
      "Cabin no 8, 12th floor, 1207 Godrej Water Side, Tower 2, Salt Lake Electronic Complex, Salt Lake, Kolkata 700091, West Bengal",
  },
];

/* ---------- CONTACT ---------- */
export const CONTACT = {
  phone: "+91 91364 07944",
  email: "Hr@vegithglobal.com",
  website: "www.vegithhr.com",
};

/* ---------- SIGNATURE IMAGERY ---------- */
export const IMAGES = {
  heroPoster:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  staffing:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  facility:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  compliance:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  contact:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
};

/* Backwards-compat exports still used by Header/older sections */
export const STAFFING_SERVICES = STAFFING_ITEMS.map((s, i) => ({
  key: `s-${i}`,
  title: s.title,
  desc: "",
  points: [],
}));

/* ---------- TESTIMONIALS ---------- */
export const TESTIMONIALS = [
  {
    title: "Flawless Workforce Scaling During Peak Seasons",
    quote:
      "Vegith's temporary staffing suite completely transformed our operations. They deployed huge numbers of vetted workers within days, backed by airtight labor compliance. Their proactive approach saved our timeline and protected our bottom line.",
    author: "Operations Director",
    handle: "ecommerce-hub",
    company: "National E-Commerce Hub",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Unmatched Operational Standards and Facility Care",
    quote:
      "Vegith manages our end-to-end facility management with impressive precision. From corporate hospitality to heavy utility upkeep, their team ensures our facility runs seamlessly 24/7.",
    author: "Head of IT Parks",
    handle: "itparks-group",
    company: "Multinational IT Workspace",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Zero Compliance Risks on the Production Floor",
    quote:
      "Partnering with Vegith for our temporary staffing has given us complete peace of mind. Their integrated labor compliance handles every detail flawlessly, allowing our management to focus purely on production output.",
    author: "Plant Manager",
    handle: "auto-components",
    company: "Automotive Components Manufacturer",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "The Ultimate One-Stop Operational Partner",
    quote:
      "Vegith truly delivers on its promise of a seamless operational umbrella. They handle both our premium commercial facility management and our front-of-house temporary staffing simultaneously.",
    author: "General Manager",
    handle: "retail-mall",
    company: "Premium Retail Mall Network",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "A True Partner in Business Growth",
    quote:
      "Their temporary staffing solutions have given us the flexible workforce we needed to rapidly expand our distribution footprint across India without a single operational hitch.",
    author: "Chief Operating Officer",
    handle: "fmcg-brand",
    company: "Pan-India FMCG Brand",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Airtight Statutory Compliance, Every Cycle",
    quote:
      "The Vegith compliance team owns every statutory return on our behalf — PF, ESIC, PT, LWF — and shows up on inspection day like part of our own team. Absolute confidence.",
    author: "Head of HR",
    handle: "warehousing-major",
    company: "Warehousing Major",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
  },
];