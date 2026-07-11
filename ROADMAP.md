# KOVITAD.shop roadmap

Current state: the design system and bilingual UI kit are containerized and ready to deploy to one AWS Lightsail 1 GB instance using one Caddy Docker container with automatic HTTPS for `kovitad.shop` and `www.kovitad.shop`.

## Phase 1 — Publish the current site

Goal: get the current KOVITAD.shop preview online safely.

Status:
- Done: Git repo initialized.
- Done: Docker container builds locally.
- Done: Local preview works at `http://localhost:8080`.
- Done: Caddy configured for automatic HTTPS.
- Next: push to GitHub.
- Next: deploy to Lightsail.
- Next: point DNS to Lightsail static IP.

Acceptance criteria:
- `https://kovitad.shop` loads.
- `https://www.kovitad.shop` loads.
- `https://kovitad.shop/healthz` returns `ok`.
- Container restarts automatically after reboot.

## Phase 2 — Convert prototype into a real production site

Goal: turn the reference UI kit into real public pages instead of a design-system click-through.

Recommended stack:
- Next.js App Router
- TypeScript
- CSS variables from `tokens/*.css`
- `lucide-react` for icons
- One Docker container for runtime

Initial routes:
- `/` — Thai-first home page
- `/library` — article / guide library
- `/articles/[slug]` — article detail
- `/guides/[slug]` — ebook / guide detail
- `/about` — Kovitad editorial/about page
- `/privacy` — privacy policy
- `/terms` — terms

Acceptance criteria:
- No CDN React/Babel in production pages.
- Thai is default.
- EN/ไทย toggle works.
- Mobile layout is polished.
- Health disclaimer appears near health content.
- SEO metadata exists per page.

## Phase 3 — Content system

Goal: make articles and guides easy to update.

Lightweight first option:
- Markdown/MDX files in the repo.
- Bilingual frontmatter fields.
- Static generation.

Future option:
- Headless CMS when publishing cadence increases.

Content types:
- Article
- Guide/ebook
- Topic/category
- Author/curator note

Acceptance criteria:
- Add a new article without touching UI components.
- Thai and English versions can be managed separately.
- Reading time, topic, excerpt, and hero image are structured.

## Phase 4 — Newsletter and customer capture

Goal: collect readers before adding commerce.

Options:
- Buttondown
- ConvertKit
- Mailchimp
- Brevo
- AWS SES + simple backend later

Acceptance criteria:
- Newsletter form works.
- Success/error states are branded.
- No page reload required.
- Privacy note included.

## Phase 5 — Ebook/product purchase flow

Goal: sell digital guides without making the site feel like a supplement store.

Recommended options:
- Lemon Squeezy
- Gumroad
- Stripe Payment Links
- Shopify only if product catalog becomes larger

Acceptance criteria:
- Prices display in `฿`.
- CTAs remain calm: “Get the guide”, not aggressive sales copy.
- Digital delivery works.
- Refund/contact path is clear.

## Phase 6 — Analytics, SEO, and operations

Goal: make the site measurable and reliable.

Add:
- Plausible or Cloudflare Web Analytics
- Sitemap
- Robots.txt
- Open Graph images
- Deployment/update script
- Basic backup notes
- Uptime monitor

Acceptance criteria:
- Search engines can crawl pages.
- Social shares look correct.
- Owner can update the server with one command.

## Immediate next tasks

1. Push this repo to GitHub.
2. Deploy current container to Lightsail.
3. Verify `kovitad.shop` DNS and HTTPS.
4. Create production Next.js app structure.
5. Port tokens and core components.
6. Rebuild Home page as the first real page.
