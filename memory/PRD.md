# Moments.Live - Product Requirements Document

## Original Problem Statement
Create a pixel-perfect clone of moments.live, later pivoted to a B2B business model aimed at professional photographers.
Key value prop: "Manage More. Charge More. Deliver Better." (Dual-value: Core B2B Platform + Consumer Guest App Upsell).

## Product Overview
Multi-page B2B landing website (Main Landing Page + Guest App Page) for a media management platform targeting professional photographers.

## Brand & Design
- **Colors**: FFF5E9 (warm cream), 294D32 (deep green), D1D7C9 (sage), F3F7EF, 68798B, 000000, F1F5F9, FFFFFF, F4D0D8, AC5BC0
- **Typography**: Space Grotesk (headings), Inter (body)
- **Style**: Bold, premium, alive UI with warm cream backgrounds and deep green CTAs
- **Responsive**: Desktop (1920px), Laptop (1440px), Tablet (768px), Mobile (375px)

## Architecture
- Frontend: React + TailwindCSS + Framer Motion + Shadcn UI
- Backend: FastAPI + Motor (MongoDB) — NOT YET IMPLEMENTED
- Data: All mocked via `/app/frontend/src/data/mockData.js`

## Pages & Components
### Landing Page (`/`)
- Navbar (scroll-aware, responsive lg breakpoint)
- LandingHero (pill badge, dual headings, CTA buttons, dashboard image)
- ProblemSection (pain points grid, opportunity callout)
- DualValueSection (Layer toggle: Backend/Client Upsell)
- PlatformFeatures (tab-based feature showcase with dashboard screenshots)
- HowItWorks (5-step process grid)
- BusinessCase (saves/earns comparison cards)
- B2BTestimonials (stats grid + carousel)
- B2BPricing (3-tier pricing cards)
- WhyNowAndCTA (why now reasons + final CTA)
- Footer (4-column layout)

### Guest App Page (`/guest-app`)
- Separate marketing page for the consumer-facing guest app feature

## What's Been Implemented (Feb 2026)
- [x] Full B2B landing page with all 11 sections
- [x] Guest App page
- [x] Brand color rebrand & Space Grotesk typography
- [x] Responsive design audit (Desktop/Laptop/Tablet/Mobile)
- [x] Heading size standardization (text-[2rem] md:text-[2.8rem])
- [x] Text clipping fix (line-height: 1.12)
- [x] Text readability improvements (opacity adjustments)
- [x] Navbar lg breakpoint for tablet support
- [x] "RASK" placeholder text removal
- [x] All sections tested and verified (100% pass rate)

## Backlog

### P1 - Backend Foundation
- MongoDB schema design (Events, Media, Sub-events, Users/Photographers)
- CRUD API endpoints (`/api/events`, `/api/media`, etc.)
- Replace mockData.js with actual API calls

### P2 - Authentication & Security
- Authentication (JWT or Emergent Google Login)
- User roles (Photographer, Guest, Admin)

### P2 - Media Management
- File upload functionality (chunked uploads)
- Object storage integration
- Media organization features

### P3 - Integration & Testing
- Integration tests
- Guest App page polish
- Performance optimization
