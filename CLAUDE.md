# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This repo is the **KOVITAD Wellness Design System** — a self-contained, Thai-first design system + Agent Skill for KOVITAD.shop (a lifestyle & longevity *publication*, not a supplement store). It is a design/reference package, **not a runnable application**. There is no `package.json`, no build/test/lint toolchain, and no server here. Start from `readme.md` (brand + full index), `SKILL.md` (agent entry point), and `HANDOFF.md` (what's production-ready vs. reference).

## No build/test commands — how to work here

- **There is nothing to `npm install`, build, or test.** The `.jsx` component sources are already compiled into `_ds_bundle.js` (namespace `window.KOVITADWellnessDesignSystem_61cabf`); the repo has no tooling to regenerate it.
- **To preview anything, open an HTML file in a browser** (all pull React/Babel/Lucide from CDN and link `styles.css`):
  - `ui_kits/kovitad_shop/index.html` — the full interactive bilingual site (Home ▸ Library ▸ Article).
  - `components/*/*.card.html` and `guidelines/*.html` — specimen/spec sheets.
  - `templates/*/*.dc.html` — page scaffolds.
- Files prefixed `_` (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) and every `support.js` / `ds-base.js` are **generated artifacts of the external design tool — do not edit or hand-port them.**

## Architecture

The system is layered; each layer consumes the one above:

1. **Tokens** (`tokens/*.css`) — the single source of truth. All colors, type, spacing, radii, shadows, gradients, and motion are CSS custom properties. `styles.css` is the only entry consumers link; it `@import`s `fonts → colors → typography → spacing → effects → base`. **Never hardcode a hex/px value that already exists as a token.** `tokens/effects.css` also defines the branded utility classes: `.k-shine` (one-pass hover shimmer), `.k-silver-text`, `.k-divider`, `.k-eyebrow`.
2. **Components** (`components/{actions,forms,display,navigation,overlay,icons,brand}/`) — 18+ React primitives, each a trio: `X.jsx` (source, written for a CDN/Babel sandbox — inline-style based, reading tokens via `var(--…)`), `X.d.ts` (props contract), `X.prompt.md` (usage note + example). These compile into `_ds_bundle.js`.
3. **Compositions** — `ui_kits/kovitad_shop/` (hi-fi interactive site) and `templates/` (landing EN, `landing-page-th` ไทย, article). These read primitives *from the compiled bundle* — they never re-implement them.
4. **Guidelines** (`guidelines/*.html`) — visual spec cards documenting each foundation.

**Production vs. reference (from `HANDOFF.md`):** `styles.css` + `tokens/*.css` are production-usable as-is (or port to Tailwind/your framework). Everything else — `components/**/*.jsx`, `ui_kits/`, `templates/` — is a **reference implementation to recreate in the consumer's real stack, not ship verbatim** (they target a CDN/Babel sandbox). In production, icons become `lucide-react` and the `<image-slot>` placeholder becomes a real `<img>`/CMS field.

## Brand rules that constrain any UI you build here

These are strict — violating them breaks the brand. Full detail in `readme.md`; the load-bearing ones:

- **Palette ratio ~80% warm ivory / 12% forest green / 8% silver.** Silver (`--silver-*`) is *jewelry*: hairlines, dividers, one `.k-shine` sweep on hover — never large fills. **Max ~2 shimmering elements per viewport**; respect `prefers-reduced-motion`.
- **Type:** Cormorant Garamond 600 for display headlines (heroes up to 88px, tight 1.08 leading), Figtree for body/UI, Marcellus for the wordmark. **Sentence case everywhere** (ALL-CAPS only for `.k-eyebrow` labels). **No emoji, ever.** Prices in `฿` (`฿390`, never `THB 390`).
- **Bilingual, Thai-first.** Thai renders via built-in fallbacks (Trirong serif / Anuphan sans) with no extra markup. **Thai type rules (`guidelines/type-thai-rules.html`): letter-spacing ≤ 0.04em (the 0.14–0.22em Latin eyebrow/CTA tracking must NOT touch Thai), display leading ≥ 1.2, body 1.7–1.9, no italics.** Put `white-space: nowrap` on buttons/nav labels (Thai wraps mid-word otherwise).
- **Signature layout = immersive full-bleed photo heroes** (~86–90vh) under `--grad-scrim-hero` with an overlay header; interior pages keep the sticky ivory header. Hero imagery is user-supplied photography (Thai/Asian people, natural light) — never fabricate photos.
- **Copy is education, not medical advice.** Hedged claims ("research suggests", "may support"), calm CTAs ("Read the guide", never "BUY NOW"), and keep the standing disclaimer near health content.
- **Icons:** Lucide, 1.75px stroke, via the `Icon` wrapper. **Banned glyphs:** medical cross, DNA, pill, syringe, stethoscope, heavy dumbbells, flame streaks. Never multicolor.
- **No final logo exists.** Use the type wordmark (KOVITAD in Marcellus + `.shop` in Figtree, see `components/brand/Wordmark.jsx`). The `assets/logo-mark-*.png` are explorations only — reference, never redraw or ship.
