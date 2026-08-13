# PROJECT BRIEF: BLUERAY Oil & Gas Website Transformation

## PROJECT
**BLUERAY Oil & Gas Website**
Official Legal Entity: **BLUERAY OIL AND GAS FIELD PIPELINE INSPECTION L.L.C.**

## DESCRIPTION
Rebrand and transform the existing Al Noor Tech website into the official, modern website for BLUERAY NDT and industrial inspection services using client-supplied company and technical reference material.

## EXECUTION PLATFORM
Antigravity

## ACTUAL STACK
- **Framework**: Next.js 15.1.4 (App Router)
- **UI & Logic**: React 19.0.0 / React-DOM 19.0.0
- **Styling**: Tailwind CSS 3.4.17 & PostCSS
- **Animation**: Framer Motion 11.15.0
- **Icons**: Lucide React 0.469.0
- **Language**: TypeScript 5.7.2
- **Architecture**: Single Page View State Routing inside `app/page.tsx` (`useState` navigation state pattern)

## FOLDER STRUCTURE
- `app/`: Next.js core application (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/layout/`: Global Shell (`Navbar.tsx`, `Footer.tsx`, `PageWrapper.tsx`)
- `components/pages/`: Subpage Views (`AboutPage.tsx`, `ContactPage.tsx`, `ServicePage.tsx`, `ManpowerPage.tsx`)
- `components/pages/HomePage/`: Homepage Modular Sections (`HeroSection.tsx`, `CompanyIntro.tsx`, `ServicesOverview.tsx`, `IndustriesServed.tsx`, `WhyChooseANT.tsx`, `CTASection.tsx`)
- `components/icons/`: SVG icon utilities (`CustomIcons.tsx`)
- `.agents/rules/`: Persistent project governance (`blueray-project.md`)

## FINAL APPROVED BRAND REVISION
The original BLUERAY blue / black / orange identity is authoritative and supersedes all prior orange-primary brand instructions. Blue is primary; orange is a limited accent. The exact supplied logo cannot be recolored or altered and is preserved at `public/images/blueray-logo-final-approved-source.jpeg`.

Representative tokens extracted deterministically from the approved logo source:
- Brand Blue: `#023FAE`
- Brand Blue Deep: `#042C7D`
- Brand Blue Light: `#4662AA`
- Brand Charcoal: `#222627`
- Brand Orange: `#F97908`

Theme surfaces and supporting text/borders should be derived harmoniously from this palette. The logo's blue tonal variation must remain intact.

## MODEL STRATEGY
- **Default**: Gemini 3.6 Flash
- **Escalation**: Gemini 3.1 Pro only when:
  1. The same difficult problem fails twice with Flash, OR
  2. Genuinely complex architecture or security reasoning is required.
- **Routine mechanical changes**: Use lower reasoning settings or Flash model when appropriate.

## CONFIRMED CLIENT MASTER SERVICE LIST (SOURCE OF TRUTH)
1. Visual Testing (VT)
2. Liquid / Dye Penetrant Testing (PT)
3. Eddy Current Testing (ET)
4. Ultrasonic Testing (UT)
5. Ultrasonic Thickness Gauging (UTG)
6. Hardness Testing
7. Magnetic Particle Testing (MT)
8. Positive Material Identification (PMI-XRF)
9. Holiday Testing
10. Paint / Coating Thickness Measurement
11. Ferrite Inspection
12. Leak Testing (LT)
13. Phased Array Ultrasonic Testing (PAUT)
14. Time of Flight Diffraction (TOFD)
15. Welder Qualification & Certification Services (ASME, AWS, BS EN ISO, API witness by CSWIP / AWS-CWI)
16. Tensile Pull-Out Testing (Rebar, Anchor Bolts & Hooks, Fasteners, Tiles)

## MODULE PLAN
- **M0 — Baseline Audit & Governance Setup** (COMPLETED)
- **M1 — Brand + Global Foundation** (COMPLETED)
- **M2 — Homepage Transformation & Factual Pass M2.1** (COMPLETED)
- **M3 — About Us View Transformation** (COMPLETED)
- **M4 — Services View Transformation** (COMPLETED)
- **M5 — Contact, Footer & Metadata Optimization** (COMPLETED)
- **M6 — Responsive & Visual QA** (COMPLETED)
- **M7 & M7.1 — Final Release Audit & Source Completeness Pass** (COMPLETED)
- **M8 — Final Source Completeness, Image Integration & Release Regression Loop** (COMPLETED)

## STATUS
**FINAL BLUE-PRIMARY BRAND REVISION PERSISTED — READY FOR IMPLEMENTATION**
