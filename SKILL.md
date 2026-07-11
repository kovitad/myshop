---
name: kovitad-design
description: Use this skill to generate well-branded interfaces and assets for KOVITAD.shop (modern lifestyle & longevity brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key facts:
- Calm, premium, editorial wellness publication — never pharmacy, supplement-shop, or luxury-spa.
- Palette: warm ivory `#F7F2E8` pages, deep forest green `#173F35`, charcoal `#1E2824`, metallic silver accents (`#C8CDD2` / `#EEF1F3` / `#737B82`). Silver is jewelry: hairlines, dividers, one shine sweep on hover (`.k-shine`) — never large fills.
- Type: Cormorant Garamond 600 for headlines (heroes up to 88px — big and bold), Figtree for body/UI, Marcellus for the wordmark; Trirong + Anuphan cover Thai script. Sentence case everywhere; no emoji. Prices in ฿.
- Primary audience is Thai/Asian: immersive full-bleed photo heroes (`--grad-scrim-hero` + overlay header) are the signature layout — see `guidelines/hero-pattern.html` and the `landing-page` template.
- Bilingual: Thai-first with an EN/ไทย toggle (UI kit shows the pattern). Thai type rules: display leading ≥ 1.2, body 1.7–1.9, tracking ≤ 0.04em on Thai, no italics for Thai — see guidelines/type-thai-rules.html. Thai landing template: templates/landing-page-th/.
- All tokens are CSS custom properties in `styles.css` (imports `tokens/*.css`).
- Components live under `components/` and compile to `window.KOVITADWellnessDesignSystem_61cabf`. Icons: Lucide CDN, 1.75px stroke; never medical glyphs (cross, dna, pill, syringe).
- Copy is education, not medical advice — hedged claims ("research suggests"), calm CTAs ("Read the guide"), and the standing disclaimer near health content.
- No final logo exists: use the type wordmark (KOVITAD in Marcellus + ".shop"), never redraw the exploration marks.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
