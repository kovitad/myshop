# KOVITAD.shop UI kit

High-fidelity recreation of the KOVITAD.shop website surfaces. **No existing site or codebase was provided** — these screens are authored from the brand brief as the reference implementation of the design system.

- `index.html` — interactive click-through (Home ▸ Library ▸ Article via the header nav; newsletter signup, tag filters, ebook dialog + toast all work).
- `SiteChrome.jsx` — `SiteHeader` (sticky, blurred ivory) + `SiteFooter` (charcoal ink, disclaimer) + `NewsletterBand`.
- `Home.jsx` — hero on deep-forest band, Start-here topic tiles, featured ebooks (premium ProductCards), latest articles, newsletter.
- `Library.jsx` — catalogue with Tabs, topic Tag filters, sort Select, ProductCard grid.
- `Article.jsx` — 720px reading measure, pull quote, education-not-advice callout, related reading.

Screens read components from `window.KOVITADWellnessDesignSystem_61cabf` (the compiled bundle) — they don't re-implement primitives.
