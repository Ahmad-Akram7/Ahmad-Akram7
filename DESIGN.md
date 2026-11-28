# Portfolio Redesign — Engineering Studio

## Direction
A contemporary engineering portfolio for civil-engineering opportunities, geospatial research, graduate applications, and technical collaboration. The visual language is precise and editorial: cool white surfaces, graphite typography, deep technical blue, and a restrained signal-orange accent.

## Audience and goals
- Recruiters and engineering teams evaluating practical skills.
- Faculty and prospective supervisors assessing research interests and technical discipline.
- Collaborators reviewing engineering projects and their documented limitations.

## Content rules
- Engineering, research, and independently developed software projects may be included when their role is clear. Distinguish original work from forks and contributions; do not imply sole authorship of upstream projects.
- Repository documentation is the source of truth.
- Do not invent project outcomes, performance metrics, credentials, endorsements, or screenshots.
- Clearly distinguish academic/educational work from validated engineering deliverables.
- The highway project documentation reports conflicting route-length values and currently lacks original drawings/screenshots. The portfolio must disclose that limitation and must not present an invented map or alignment as a measured result.
- Climate Risk Portfolio Assessor contains experimental/assumed loss-model elements; label them as experimental and not validated for operational use.
- Soil classification models are educational models; the README describes simplified decision logic. Do not imply full standards compliance without independent verification.
- The MATLAB/Simulink concrete mix model and the newer Concrete Mix Designer web app are separate projects. The web app uses a small illustrative lookup dataset and is not a complete ACI PRC-211.1-22 implementation; describe it as a preliminary educational estimator, not a validated design tool.

## Visual system
| Token | Value | Use |
|---|---|---|
| Background | #F4F7F9 | Page canvas |
| Surface | #FFFFFF | Project and content surfaces |
| Ink | #17232D | Primary text |
| Muted | #52616D | Supporting text |
| Technical blue | #174F78 | Primary actions and section accents |
| Signal orange | #D45B32 | Small emphasis and focus states |
| Border | #D8E0E5 | Dividers and outlines |

Typography:
- Display: Newsreader 400, Georgia fallback.
- Interface/body: Manrope 400 and 700, system sans-serif fallback.
- Technical metadata: DM Mono 400/500, monospace fallback.
- Avoid synthetic colored emphasis; use the display face consistently.

Layout:
- Desktop content max-width: 1240px.
- Desktop hero: two-column editorial composition.
- Tablet: single-column hero and project grid.
- Mobile: 16–20px page gutters, single-column content, no horizontal overflow.
- Breakpoints: 900px and 600px.

## Information architecture
1. Header/navigation with direct GitHub access
2. Hero with a clearly labelled conceptual engineering sheet and title block
3. Selected projects with source links and revision-style notes
4. Research interests
5. Technical capabilities
6. Education and current focus
7. Contact and résumé

## Project selection
1. LendLog — include as an open-source fork/contribution effort. Credit upstream maintainers and distinguish fork ownership from original authorship. Use a real screenshot from the fork's `screenshots/` directory.
2. Ledger — Finance Tracker — independent local-first finance application. Use `Docs/browser-preview.svg` only with a visible note that it is an illustrative UI preview, not a live screenshot. State that browser, Android, and CLI data stores do not sync.
3. Climate Risk Portfolio Assessor — climate-risk workflow and screening application; experimental modelling is disclosed.
4. Gujranwala–Sialkot Highway Design — academic Civil 3D highway-design project; source documentation and missing drawing assets are disclosed. Do not imply a real route map is present.
5. Concrete Mix Design — MATLAB/Simulink workflow documented in the repository; use repository-provided image with intrinsic dimensions.
6. Concrete Mix Designer — newer React/Vite browser application for preliminary estimates, batch moisture corrections and QC record keeping. Link to the live site and repository; state its calculation limitations.
7. Soil Classification Models — educational USCS/AASHTO Simulink models; disclose simplified logic and avoid implying standards compliance.

## Accessibility and implementation
- Single self-contained `index.html`; no build step or framework.
- Semantic landmarks and heading hierarchy.
- Visible keyboard focus, skip link, descriptive image alternatives, reduced-motion support.
- Contrast targets: WCAG 2.2 AA for normal text (4.5:1) and large text (3:1).
- Mobile navigation links have at least 44px tap height; metadata is at least 11px.
- Open Graph and Twitter metadata plus an inline SVG favicon support sharing and browser identification.
- Use restrained CSS-only entrance/scroll motion with a reduced-motion override.
- Responsive layouts still require browser validation at 375px, 768px, and 1440px after deployment.
- Use native HTML/CSS/JS only; no external JavaScript dependencies.
