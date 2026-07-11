# KOVITAD Wellness Design System

**Brand:** KOVITAD.shop — a modern lifestyle & longevity brand. Practical, evidence-informed content: ebooks, digital guides, articles, videos, and curated wellness products covering nutrition, movement, sleep, mindset, and healthy ageing. **Primary audience: Thai / Asian customers** — presentation is big, bold and modern (immersive full-bleed photography, large display type), prices in ฿ THB, and the type system carries Thai script.

**Positioning:** A trusted wellness *publication*, not a supplement store. Calm, credible, premium, modern, approachable. Kovitad is the founder and curator — **not a doctor**; everything is general education and practical lifestyle guidance, never medical advice.

**Feel:** Premium editorial with a subtle "silver bling" aesthetic — polished silver, soft chrome reflections, pearl-white highlights, small shimmering details. Silver replaces most former muted-gold accents. Luminous and slightly futuristic, never loud, glittery, or cheap.

**Sources provided:**
- `assets/logo-exploration-sheet.png` — uploaded logo exploration (4 concepts, AI-generated via Higgsfield). Individual marks cropped to `assets/logo-mark-*.png`. **No final logo exists yet** — treat marks as exploratory; prefer the plain-type wordmark in UI.
- Brand brief (colors, tone, aesthetic rules) supplied in text — encoded in `tokens/` and this file.
- No codebase, Figma, fonts, or existing site were provided. Components below are an authored standard set, not recreations.

**Avoid (hard rules):** medical crosses, DNA icons, pill-heavy imagery, exaggerated fitness bodies, fear-based messaging, unsupported health/longevity claims. Don't look like a pharmacy, hospital, aggressive supplement shop, or luxury spa.

---

## CONTENT FUNDAMENTALS

**Voice:** A knowledgeable friend who reads the research. Trustworthy, intelligent, natural, approachable. Educational and encouraging — never preachy, alarmist, or salesy.

- **Person:** Second person ("you", "your energy"), first person singular for the curator's voice ("What I learned…"). Never corporate "we solutions".
- **Casing:** Sentence case everywhere — headlines, buttons, nav. ALL-CAPS only for small eyebrow labels (`.k-eyebrow`). No Title Case Headlines.
- **Claims:** Hedged and evidence-informed: "research suggests", "may support", "linked to". Never "cures", "reverses ageing", "clinically proven". Every health topic framed as education: "This is general education, not medical advice."
- **Numbers:** Concrete and modest — "12-page guide", "7 evening habits", "under 20 minutes". No hype stats.
- **Emoji:** None. Ever.
- **CTAs:** Calm verbs — "Read the guide", "Browse the library", "Start here", "Get the ebook". Never "BUY NOW!!", scarcity timers, or fear hooks. In immersive heroes, CTAs may be set in small uppercase with wide tracking (0.14em) — a premium-resort convention — but the words stay calm.
- **Language & currency:** Fully bilingual — Thai first for the Thai audience, with an EN/ไทย toggle in the site header (see the UI kit). Thai script uses the built-in fallbacks (Trirong serif / Anuphan sans) so mixed Thai–Latin copy needs no extra markup. Prices in Thai baht: "฿390", never "THB 390". Brand words stay Latin ("KOVITAD", "Kovitad").
- **Thai typography rules:** display line-height ≥ 1.2 (Latin uses 1.08), body 1.7–1.9; letter-spacing ≤ 0.04em on Thai (wide tracking breaks tone marks — the 0.14–0.22em Latin eyebrow/CTA tracking must NOT be applied to Thai); no italics for Thai; a thin space before ๆ. See `guidelines/type-thai-rules.html`.
- **Example headline:** *Small habits, longer health.* / *Eat for the decades ahead.*
- **Example body:** "Most of what moves the needle isn't exotic. Consistent sleep, daily movement, and a plate built around plants — this guide walks through the evidence for each, and how to actually stick with them."
- **Example disclaimer (always near health content):** "KOVITAD shares general education and personal experience, not medical advice. Talk to your clinician before changing your health routine."

## VISUAL FOUNDATIONS

**Palette:** Warm ivory pages (`#F7F2E8`), deep forest green for headings/primary surfaces (`#173F35`), charcoal body text (`#1E2824`), and **metallic silver** (`#C8CDD2`, highlight `#EEF1F3`, dark chrome `#737B82`) as the refined accent — borders, dividers, icons, button rims, hover shimmer. Green = trust & nature; silver = precision & modernity; ivory = warmth & calm. Ratio roughly 80% ivory, 12% green, 8% silver. Silver is *jewelry*: hairlines and highlights, never large fills of the page.

**Type:** Cormorant Garamond (600) for display headlines — large, tight leading (1.08), minimal tracking. **Scale is bold:** heroes use `--text-6xl` (88px, clamp down on mobile), section headings `--text-4xl` (46px). Figtree for body (16px/1.65) and all UI. Thai fallbacks ship in the stacks: Trirong (serif) and Anuphan (sans) render Thai copy harmoniously with zero extra markup. Marcellus only for the wordmark lockup. Eyebrow labels: Figtree 600, 12px, 0.16em tracking (0.22em over photography), uppercase. Body measure ≤ 720px. Minimum text 12px; body never below 16px.

**Immersive heroes (signature layout):** full-bleed photography (~86–90vh) under `--grad-scrim-hero`, with an overlay header (absolute, top fade `rgba(14,33,27,.45)→0`, ivory wordmark + nav, chrome sign-in pill) and centered white display type with soft text-shadow. CTAs: chrome pill + translucent dark pill, small caps 0.14em tracking. Imagery is user-supplied via `<image-slot>` (`assets/image-slot.js`) — never fake photography. Interior pages keep the sticky ivory header.

**Backgrounds:** Flat warm ivory dominates interior pages. Deep forest green (`--grad-green-depth`) for newsletter/footer bands. Home/landing heroes are full-bleed photography (see Immersive heroes). Bright silver-white (`--silver-50`) occasionally for product shelves. Photography direction: Thai/Asian people and places, natural light, plants, food, calm movement; warm, low-saturation. No patterns or textures.

**Silver usage (the "bling" system):** ① hairline chrome borders (`--border-silver`) on premium cards and secondary buttons; ② `--grad-chrome` on thin rules, icon tiles, and badge fills; ③ `.k-shine` — a single 900ms shine sweep on hover for primary CTAs and premium cards; ④ `.k-silver-text` gradient on a single word or numeral; ⑤ `--shadow-silver` rim+glow for ebook/product cards. Max ~2 shimmering elements visible per viewport.

**Motion:** Calm. 150ms color/opacity transitions, 280ms transform/lift, 650ms fades-on-scroll. Easing `--ease-out`. No bounces, no parallax, no infinite loops. Shine sweep runs once per hover. Respect `prefers-reduced-motion`.

**Hover:** links shift green-600→green-500; buttons lighten/darken one step + shine sweep; cards lift 2px with `--shadow-md` and border brightens silver-300→silver-500. **Press:** darken one step, translateY(1px), no shrink-scale.

**Borders & shadows:** 1px hairlines (`rgba(30,40,36,.10)` on ivory, silver on premium). Shadows are soft, green-tinted, wide-radius (`--shadow-sm/md/lg`); silver-rimmed `--shadow-silver` marks paid/premium items. No hard outlines, no inner shadows except `--inset-sheen` on chrome surfaces.

**Radii:** cards 12–18px (`--radius-md/lg`), inputs 12px, buttons & tags full pill, images 12px, modals 18px. Nothing sharp-cornered except full-bleed bands.

**Cards:** warm-white `--surface-raised` on ivory, 1px hairline, `--shadow-sm`, 24px padding. Premium (ebook/product): silver hairline + `--shadow-silver` + `.k-shine` on hover. No colored left-border accents.

**Layout:** mobile-first; max 1180px container, 24px gutters; article measure 720px. Sections separated by 96px (64px mobile) and optionally a `.k-divider` chrome hairline. Sticky top nav (ivory, blur backdrop `saturate(1.2) blur(12px)` at 92% opacity) is the only fixed element. Generous whitespace is a feature — when unsure, add space, not content.

**Imagery color vibe:** warm, natural light, muted saturation, real people/food/plants — Thai and Asian faces and settings first; no clinical white, no neon, no stock-fitness bodies.

## ICONOGRAPHY

- **Icon set:** [Lucide](https://lucide.dev) via CDN (pinned UMD build) — thin 1.75px stroke, rounded caps, matches the calm/precise brand. Loaded in cards & kits via `<script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js">`; React components use the `Icon` wrapper (`components/icons/Icon.jsx`). This is a **CDN substitution** — no brand icon set was provided.
- **Recommended glyphs:** leaf, sprout, book-open, moon, footprints, salad, heart-handshake, sun-medium, timer, sparkles (sparingly), arrow-right, check.
- **Banned glyphs:** cross/plus-medical, dna, pill, syringe, stethoscope, dumbbell-heavy imagery, flame/fire streaks.
- **Color:** green-700 on light, silver-300 on dark, or chrome-gradient tile behind (see `IconTile` pattern in cards). Never multicolor.
- **Emoji / unicode-as-icons:** not used.
- **Logo:** no final logo. Wordmark = "KOVITAD" in Marcellus + ".shop" in Figtree (see `components/brand/Wordmark.jsx`). Exploration marks in `assets/` are references only; `logo-mark-k-leaf.png` (K + leaf) is the strongest candidate.

## Intentional additions

Standard set was authored from scratch (no source inventory existed). Beyond it:
- `Divider` — brand brief explicitly calls for silver section dividers.
- `ProductCard` — brief explicitly calls for premium product & ebook cards.
- `Icon` — wrapper for the Lucide CDN set.
- `Wordmark` — type-only brand lockup (no final logo exists).

## INDEX

- `styles.css` — global CSS entry (imports everything below). Consumers link this one file.
- `tokens/` — `fonts.css` (Google Fonts imports), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (gradients, shadows, motion, `.k-shine`/`.k-silver-text`/`.k-divider`/`.k-eyebrow` utilities), `base.css` (body/link/selection defaults).
- `assets/` — `logo-exploration-sheet.png` + cropped marks (`logo-mark-k-leaf.png`, `logo-mark-petals.png`, `logo-mark-circle.png`, `logo-horizontal.png`); `image-slot.js` (drag-and-drop image placeholder used by heroes). Marks are references only — no final logo.
- `guidelines/` — foundation specimen cards (colors, type incl. Thai script, spacing, radii, shadows, silver effects, immersive hero pattern, brand voice, logo explorations).
- `components/` — the reusable primitives (bundle namespace: `window.KOVITADWellnessDesignSystem_61cabf`):
  - `actions/` — **Button**, **IconButton**
  - `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
  - `display/` — **Card**, **Badge**, **Tag**, **Divider**, **ProductCard**
  - `navigation/` — **Tabs**
  - `overlay/` — **Dialog**, **Toast**, **Tooltip**
  - `icons/` — **Icon**, **IconTile** (Lucide CDN wrapper)
  - `brand/` — **Wordmark**
- `ui_kits/kovitad_shop/` — interactive, **bilingual (EN/ไทย toggle, Thai default)** website recreation (Home ▸ Library ▸ Article) composed from the primitives.
- `templates/` — consumer starting points: `landing-page/` (marketing home, EN), `landing-page-th/` (หน้าแรกภาษาไทย), `article-page/` (editorial reading page).
- `SKILL.md` — agent skill entry point for using this design system.
