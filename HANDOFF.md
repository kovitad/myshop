# Handoff: KOVITAD Wellness Design System → Claude Code

## What this is
A complete, self-contained design system for **KOVITAD.shop** (Thai-first lifestyle & longevity brand). Start with `readme.md` (brand, voice, visual rules, index) and `SKILL.md` (agent instructions).

## How to use with Claude Code
1. Download this project as a zip and unzip it **into your repo** at:
   - `.claude/skills/kovitad-design/` → makes it an invocable **Agent Skill** (`SKILL.md` is already in the required format), or
   - `design/kovitad-design-system/` → plain reference folder; tell Claude Code to "read design/kovitad-design-system/readme.md before doing any UI work".
2. Then prompt Claude Code, e.g.:
   - "Use the kovitad-design skill. Build the real Home page in Next.js from `ui_kits/kovitad_shop/` — Thai default, EN toggle."
   - "Port `tokens/*.css` into our Tailwind config as theme tokens."

## What is production-ready vs reference
- **Production-usable as-is:** `styles.css` + `tokens/*.css` (pure CSS custom properties, Google Fonts imports, `.k-shine`/`.k-divider`/`.k-eyebrow` utilities). Link `styles.css` or port tokens to your framework.
- **Reference implementations (recreate, don't ship):** `components/**/*.jsx` (React primitives — clean, but written for a CDN/Babel sandbox), `ui_kits/kovitad_shop/` (hi-fi interactive prototype: bilingual EN/ไทย, full-bleed hero, ฿ pricing), `templates/` (page scaffolds).
- **Ignore / do not port:** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` (build artifacts of the design tool), `*.card.html` and `guidelines/*.html` (specimen previews — useful to open in a browser as visual spec sheets), `uploads/`.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, shadows and copy are final intent — recreate pixel-perfectly using your codebase's stack. All values are tokens in `tokens/` (exact hex, px). Key rules a dev must keep:
- Thai text: line-height ≥ 1.2 display / 1.7–1.9 body, letter-spacing ≤ 0.04em, no italics (see `guidelines/type-thai-rules.html`).
- Buttons/nav labels: `white-space: nowrap` (Thai wraps mid-word otherwise).
- Silver is an accent only: hairlines, dividers, one `.k-shine` sweep on hover; max ~2 shimmering elements per viewport; respect `prefers-reduced-motion`.
- Hero imagery is user-supplied photography (Thai wellness, natural light) — the `<image-slot>` element is a design-tool placeholder; in production use a real `<img>`/CMS field with the `--grad-scrim-hero` overlay.
- Health copy is education, not medical advice — keep the standing disclaimer.

## Assets
- `assets/logo-mark-*.png`, `assets/logo-exploration-sheet.png` — logo **explorations** (AI-generated, user-provided). No final logo exists; production UI uses the type wordmark (KOVITAD in Marcellus + ".shop" in Figtree).
- Icons: Lucide (CDN in prototypes; `npm i lucide-react` in production), 1.75px stroke. Never medical glyphs (cross, DNA, pill, syringe).
- Fonts: Google Fonts — Cormorant Garamond, Marcellus, Figtree, Trirong (Thai serif), Anuphan (Thai sans). Swap for licensed files if acquired.

## Files
- `readme.md` — brand context, content + visual foundations, iconography, full index.
- `styles.css`, `tokens/` — design tokens (colors, type, spacing, effects, base).
- `components/{actions,forms,display,navigation,overlay,icons,brand}/` — 19 React primitives, each with `.d.ts` props contract and `.prompt.md` usage note.
- `ui_kits/kovitad_shop/` — bilingual interactive site prototype (`index.html`, `SiteChrome.jsx`, `Home.jsx`, `Library.jsx`, `Article.jsx`).
- `templates/` — landing page (EN), landing page (ไทย), article page.
- `guidelines/` — visual spec cards (open in a browser).
