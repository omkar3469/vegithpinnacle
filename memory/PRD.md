# Vegith Pinnacle Services — PRD

## Problem Statement (Original)
Build a premium single-page marketing website for Vegith Pinnacle Services Pvt. Ltd. that revolves around TWO CORE PILLARS (Staffing Services + Facility Management Services) as the most premium interactive sections, with HR & Statutory Compliance as a separate enterprise section. Deep navy + gold luxury theme.

## Architecture
- Frontend: React (CRA + CRACO) + Tailwind + Framer Motion + Lucide React + Sonner
- Backend: (unused for MVP — static site per user choice)
- Content: All site copy lives in `/app/frontend/src/data/content.js`

## Design System
- Theme: Deep Navy (#0A0E17) + Gold (#D4AF37) luxury
- Fonts: Playfair Display (display), Manrope (body)
- Motion: framer-motion scroll-reveals, expandable panels, hover transforms
- No backend, no auth

## User Personas
1. Enterprise HR/Procurement — evaluating staffing/FM vendors
2. Facility Manager — comparing FM providers
3. Compliance Officer — checking statutory capabilities

## Core Requirements (Static)
- Single-page scroll site — Hero → About → Why Us → Pillars → Compliance → Process → Industries → Clients → Presence → Contact → Footer
- TWO massive pillar cards with in-card tabs/accordions (11 staffing services + 24 FM services grouped in 3)
- 13 HR & Statutory Compliance enterprise cards
- 14-step process timeline
- 3 office presence cards (Mumbai, Kolkata, Bhiwandi)
- Static contact form (sonner toast on submit)

## Implemented (2025-12)
- Sticky nav header with smooth-scroll, mobile menu
- Hero with animated stats + dual CTAs
- About with quote block + values (Commitment/Dedication/Delivery)
- Why Us — 6 benefits grid
- Pillars — Staffing (tab rail + detail glass card) + Facility (grouped tabs Soft/Technical/Specialized)
- Compliance — 13 premium enterprise cards with icons
- Process — 14-step alternating vertical timeline
- Industries — 12 industry tiles
- Clients — tag cloud
- Presence — 3 stylised map cards
- Contact — static form with validation + sonner toast + contact rails
- Footer — huge wordmark + explore + reach us

## Testing
- iteration_1.json: 15/15 features PASS, 100% success, no console errors

## Backlog (Post-MVP / User-driven)
- P1: Replace text wordmark with uploaded PNG/SVG logo when user provides it
- P1: Persist contact form submissions to MongoDB + admin inbox (currently static)
- P2: Add client logo strip once real client logos are approved
- P2: Add case studies / testimonials section
- P2: Multi-language (English/Hindi) toggle
- P2: SEO metadata + Open Graph + sitemap
- P3: Add photo gallery for site imagery per pillar
- P3: Careers section with job listings

    ## Implemented (2026-06)
- ParallaxServices (`components/sections/ParallaxServices.jsx`): Unify-style full-screen pinned scroll takeover for the "Expertise That Works" services section (400vh section, sticky 100vh). Each of the 4 SERVICE_PILLARS becomes a full-viewport slide: background image crossfade + slow drift, sliding thumbnail, big animated title/tagline, "Read More" → /services, gold progress rail, scroll hint. Built with useScroll + useMotionValueEvent + AnimatePresence (no GSAP). Mobile: plain fade/translate card list.
- Fixed broken Technical Services card image URL in content.js