# BLUERAY Website Project Instructions

## Authority and scope

- BLUERAY factual-content, brand, and safety rules are authoritative over generic design advice.
- This is the existing Al Noor codebase being converted to BLUERAY. Preserve the working architecture, including its view-state routing, unless a real product or technical need requires change.
- Never invent company services, qualifications, certifications, locations, statistics, technical results, or precise engineering measurements.
- BLUERAY brochure images are factual/contextual references only. Do not use brochure photography, stock imagery, or generated industrial imagery without explicit approval. The official BLUERAY logo is the sole standing brand-asset exception.
- Prefer a clean image-free section over an incorrect visual. Reuse only legitimate original assets that are appropriate to BLUERAY.
- **Final approved brand revision:** the original BLUERAY blue / black / orange identity is authoritative and supersedes every prior orange-primary instruction. Blue is the primary brand color; orange is a limited accent.
- Preserve the exact supplied logo at `public/images/blueray-logo-final-approved-source.jpeg`. Never redraw, regenerate, recolor, invert, distort, or alter its geometry, wording, proportions, or pixels. Present it on an integrated light brand surface in both themes.
- Use the deterministically extracted logo palette as the implementation source: `--brand-blue: #023FAE`, `--brand-blue-deep: #042C7D`, `--brand-blue-light: #4662AA`, `--brand-charcoal: #222627`, and `--brand-orange: #F97908`. Preserve the logo's blue tonal variation; do not flatten it to an arbitrary Tailwind blue.
- Keep the established industrial foundation while converting active brand emphasis to blue. Orange is reserved for small highlights and select technical emphasis. Do not introduce generic SaaS styling, glassmorphism, gradient text, or an unrelated visual language.

## Engineering discipline

- Read the task and trace the touched flow before editing. Then stop at the first option that works: skip unnecessary work; reuse local patterns; use the platform or standard library; use an installed dependency; otherwise write the smallest correct implementation.
- Prefer native CSS/HTML and established project components over new dependencies or abstractions. Do not add wrappers, helpers, state, configuration, or boilerplate without a demonstrated need.
- Fix a shared root cause once rather than patching each visible symptom. Keep the diff focused, but do not trade validation, error handling, security, accessibility, or responsive correctness for fewer lines.
- For non-trivial logic, leave the smallest practical runnable verification. Test the rendered UI for user-facing work, not source code alone.
- When a deliberate simplification has a known ceiling, document the ceiling and its upgrade path in a short `ponytail:` comment.

## Experience dials and composition

- Treat these as project defaults: `DESIGN_VARIANCE = 7/10`, `MOTION_INTENSITY = 4/10`, and `VISUAL_DENSITY = 5/10`.
- At the chosen variance, favor occasional asymmetric editorial compositions, varied but disciplined section structures, and clear left-aligned hierarchy. Collapse those compositions to a stable single column on small screens.
- At the chosen density, keep information scannable: group related capabilities, use meaningful hierarchy, and give long technical labels adequate space. Avoid both empty marketing sprawl and dashboard-like density.
- Use a consistent 4px spacing rhythm, with deliberate exceptions only when composition or readability requires them.
- Build with purposeful variety: use editorial grids, fine rules, typography, proportion, and whitespace before adding cards or decoration. A repeated component is acceptable only when the content is genuinely repeated.
- Avoid centered-hero repetition, excessive pills, oversized rounded cards, fake dashboards, glowing borders, fake-precise data, and decorative elements without a clear job.
- For image-light layouts, use restrained abstract technical SVG/CSS linework related to NDT concepts. Decorative SVGs must be hidden from assistive technology; explanatory graphics need accessible text equivalents.
- Prefer stable CSS Grid tracks and responsive constraints over brittle percentage or `calc()` flex math. Reserve space for fixed-format media and never rely on `h-screen` for mobile heroes; use a content-safe dynamic viewport minimum only when viewport height is truly required.

## Interaction, motion, and accessibility

- Motion must clarify state, spatial relationship, feedback, or a technical process. Do not animate high-frequency or keyboard-driven actions merely for decoration.
- Keep routine UI motion brief: press feedback and hover generally at or below 150ms, small popovers 125-200ms, and menus 150-250ms. Entrances use responsive ease-out, exits may use ease-in, and on-screen movement may use ease-in-out. Do not use ease-in for UI entrances.
- Animate only `transform` and `opacity` where practical. Prefer property-specific, interruptible transitions over `transition: all` and restart-prone keyframes for repeatable UI state changes.
- Pressable controls should provide a subtle active state when it does not compromise layout or accessibility. Anchored menus and popovers should animate from their trigger; centered dialogs remain centered.
- Use the existing Framer Motion dependency only when CSS is insufficient or interruption/gesture behavior matters. Respect `prefers-reduced-motion` in CSS and Motion, with motion collapsing to static or instant behavior.
- Maintain visible keyboard focus, semantic controls, labeled fields, concise inline errors, adequate contrast, and touch targets that remain usable at every breakpoint.

## Delivery checks

- Make minimum necessary changes and verify the actual rendered interface at relevant desktop and mobile sizes.
- Before shipping visible copy, check it for factual support, clear referents, grammatical correctness, and plain professional language. Avoid forced metaphors and AI-sounding claims.
- Preserve the current BLUERAY brand system, service list, and factual-content rules through every design or engineering change.
