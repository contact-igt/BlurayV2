# BLUERAY Oil & Gas Project Rules

## 1. PROJECT RULE
- Transform the existing Al Noor website into the official BLUERAY website.
- Reuse working architecture and components before creating replacements.
- Avoid unnecessary abstraction.
- Do not rewrite functioning infrastructure simply because another implementation would be cleaner.

## 2. BRAND RULE
- Official brand name: **BLUERAY OIL AND GAS FIELD PIPELINE INSPECTION L.L.C.**
- Short brand name: **BLUERAY**
- No customer-facing Al Noor branding may remain in the final site.

## 3. DESIGN FOUNDATION
- Retain the strongest visual direction of the existing Al Noor site:
  - Premium industrial aesthetic
  - Dark slate backgrounds
  - High contrast
  - Technical imagery
  - Confident typography
  - Controlled motion
  - Generous spacing
  - Professional UAE / international positioning
- **Color Tokens**:
  - Primary Brand Accent: `#EA580C`
  - Highlight Accent: `#F97316`
  - Deep Background: `#020617`
  - Supporting Surfaces: `slate-900` / `slate-950` family
  - Primary Foreground: `slate-100` / `slate-200`
  - Secondary Text: `slate-400` / `slate-500`
- Orange must be used as a deliberate accent, not applied indiscriminately.

## 4. DESIGN TASTE
- `DESIGN_VARIANCE`: 5/10
- `MOTION_INTENSITY`: 3/10
- `VISUAL_DENSITY`: 5/10
- **Target Attributes**: Premium, industrial, technical, credible, international, modern, disciplined, safety-conscious.
- **Forbidden Elements**: Generic AI website aesthetic, generic centered-template hero, gradient text, glassmorphism everywhere, neon/cyberpunk styling, random decorative gradients, rainbow service cards, emoji icons, excessive animation, PowerPoint/brochure-style layouts, huge text walls, unnecessary UI libraries.

## 5. LOGO RULE
- The supplied BLUERAY logo is the official identity source.
- Do NOT redesign its geometry.
- Preserve: Oil rig, pipeline, flames, BLUERAY wordmark, company descriptor, and proportions.
- For the website-branded logo variant, convert existing BLUE logo portions to the project's orange system (`#EA580C` / `#F97316`). Retain black/charcoal structural elements.
- Do NOT change company name, invent a different symbol, create 3D styling, distort logo, add unnecessary glow, or replace with generic oil-and-gas icons.

## 6. CLIENT CONTENT RULE
- Client-provided brochure/reference material is the factual source of truth.
- Grammar can be professionally corrected, but technical and factual meaning must remain untouched.
- Do NOT invent ADNOC approval, ISO accreditation, certifications, government approvals, awards, client logos, years of experience, project counts, employee counts, response-time guarantees, 24/7 availability, market leadership, "best company", "No.1", or unsupported statistics.
- Standards mentioned in client material must not automatically be presented as official company accreditations.

## 7. IMAGE RULE
- Client-provided brochure / WhatsApp images are factual and contextual references only.
- Do NOT paste full brochure-page screenshots into the site.
- Do NOT crop or extract brochure photography for website use.
- Do NOT use random stock imagery or generated industrial imagery without explicit approval.
- The official BLUERAY logo is the exception and may remain as a brand asset.
- Prefer a clean image-free section over an incorrect image.
- Reuse legitimate original website assets only when appropriate to BLUERAY.
- Never stretch low-resolution imagery into large hero displays.

## 8. RESPONSIVE RULE
- Final website must be verified at breakpoints: `375px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`.
- Prevent horizontal overflow, clipped headings, overlapping components, broken grids, unreadably small text, broken navigation, and overflowing contact info.

## 9. IMPLEMENTATION RULE
- Strategy: **Reuse > Refactor > Rebuild**.
- Leverage existing design patterns and components before creating new ones.
- Do not add external dependencies when native framework/browser/CSS features suffice cleanly.
- Do not refactor unrelated code during a scoped module.
