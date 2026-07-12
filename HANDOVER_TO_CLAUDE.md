# Handover note for Claude — KOVITAD.shop

> ## Update — 2026-07-12: commerce + platform layer landed
>
> The site is no longer a marketing/waitlist SPA. It is now a working shop +
> early learning platform. Approved plan lives at
> `.claude/plans/cryptic-cuddling-cookie.md`. Three commits on `main`:
> `fcce80f` commerce core, `10e9339` login/membership UI, `9c5e7ba`
> chat/contact/admin.
>
> ### Architecture decisions (locked with owner)
> - Hybrid build: kovitad.shop owns brand + checkout + **entitlements**; heavy
>   pieces (video, live, support AI) offload to SaaS later.
> - **Stripe** (THB, PromptPay + card) for one-time + **Billing** membership.
> - **SQLite via built-in `node:sqlite`** — no native module. Docker base bumped
>   to `node:24-alpine`. DB at `/data/kovitad.db`.
> - Stay on Vite + React + Express, one container behind Caddy.
>
> ### What now works (all container-tested via curl)
> - Data layer `server/db.js` + `server/content.js` (catalog, satang prices) +
>   `server/entitlements.js` (`hasAccess` = paid order OR active membership).
> - Auth `server/auth.js`: pbkdf2 + httpOnly sessions. Real `login`/`logout`/`me`.
> - Stripe `server/stripe.js`: `POST /api/checkout`, `/api/subscribe`,
>   `/api/webhooks/stripe` (raw body, signature-verified, idempotent fulfil).
> - Ebook delivery `GET /api/download/:token` (expiry + entitlement gated;
>   placeholder PDFs in `ebooks/`).
> - Email `server/email.js` (Resend; logs to console without a key): receipts +
>   ticket notifications.
> - Frontend `src/main.tsx`: real Stripe checkout (replaced `window.prompt`),
>   `/login`, `/membership`, `/account` (library + downloads), `/contact`,
>   `/order/success|cancelled`, `/privacy` `/terms` `/refund`.
> - Support: floating **chat widget** (captures msg -> ticket, replies with
>   contact; AI hook at `POST /api/support/chat` for `ANTHROPIC_API_KEY`),
>   ticket form (`POST /api/support/ticket`), Facebook/YouTube/LINE follow.
> - **Visitor analytics + admin audit**: `POST /api/track` logs views (unique
>   cookie); admin (email == `ADMIN_EMAIL`, default `kovitad@gmail.com`) sees
>   `/admin` — views, unique, today, top pages, recent visits, tickets.
> - **Recorded courses (Slice B)**: `courses` in `server/content.js` (lessons,
>   sample `videoUrl` placeholder). `GET /api/courses`, `GET /api/courses/:slug`
>   (lesson `videoUrl` returned only if `preview` or entitled), `POST
>   /api/progress`. Frontend `/courses` catalog + `/courses/:slug` player
>   (video, lesson list, lock states, mark-complete, buy/join CTA). Courses are
>   purchasable products; show in `/account`. Swap `SAMPLE_VIDEO` per lesson for
>   real Bunny/Cloudflare Stream ids next.
>
> ### Real contact details wired in
> Email `kovitad@gmail.com`, phone `0839799546`, LINE `kovitadj`. Facebook +
> YouTube URLs in `SUPPORT` (src/main.tsx) are **placeholders** — replace.
>
> ### Needs the OWNER before go-live (not code)
> - Thailand **Stripe** keys (test+live) + `STRIPE_MEMBERSHIP_PRICE_ID`; register
>   webhook `https://kovitad.shop/api/webhooks/stripe`. See `.env.example`.
> - **Resend** key for real emails. Real Facebook/YouTube URLs. Deploy to
>   Lightsail (not done). PDPA cookie/consent notice recommended (analytics
>   stores IPs).
>
> ### Brand redesign — 2026-07-12 (KOVITAD.shop personal knowledge shop)
> Redesigned into Kovitad Janlakhon's personal-brand marketplace with a
> "silver bling" identity (pearl white + charcoal + metallic silver + forest
> green). Tokens retuned in `tokens/colors.css` + `tokens/effects.css` (names
> unchanged, values shifted from warm ivory → cool pearl/silver).
> - New catalog in `server/content.js`: `CATEGORIES` (10 filter keys) + 6
>   placeholder products (categories, formats, promo prices, ใหม่/ขายดี/instant
>   badges) + 2 courses. `GET /api/categories`, `GET /api/catalog`.
> - Client cart (localStorage) + `POST /api/checkout/cart` (multi-item Stripe;
>   fulfilment now handles all orders on a session). Cart drawer in the header.
> - Rebuilt frontend sections (`src/main.tsx`): Header (new Thai nav, social
>   FB/YT/TikTok, cart, "ติดตาม Kovitad"), Hero, CatalogSection + category bar +
>   ProductCard, FeaturedProduct, ContentSection (social thumbnails), Founder
>   (+ `/about`), consent Newsletter, brand Footer (all links + social +
>   health disclaimer). New `/shop` catalog page.
> - Social links (exact) in SUPPORT: FB kovitad.janlakhon, YT @kovitad,
>   TikTok @kbitidesunipo — open in new tab (header, founder, footer).
> - Example downloadable ebooks in `ebooks/` match the 6 new product ids.
>
> ### Next slices / open work
> - **Admin CMS (requested, NOT built yet):** owner wants to manage profile,
>   add categories, and upload ebooks from an admin login. Needs the catalog
>   moved from `content.js` into DB tables (catalog_products, catalog_categories,
>   a settings/profile store) + multipart upload saving PDFs to
>   `EBOOK_UPLOAD_DIR` (/data/ebooks, already checked first by the download
>   route) + admin CRUD UI under `/admin`. This is the top next task.
> - C: live classes (Zoom/YouTube gating). D: LINE OA / web-chat AI (chat hook
>   ready). E: SEO prerender + deploy to Lightsail. Recorded courses (B) done.
>
> ### Env keys (all optional in dev; see `.env.example`)
> `APP_URL DB_PATH STRIPE_SECRET_KEY STRIPE_WEBHOOK_SECRET
> STRIPE_MEMBERSHIP_PRICE_ID RESEND_API_KEY EMAIL_FROM SUPPORT_INBOX
> ADMIN_EMAIL SUPPORT_EMAIL SUPPORT_PHONE SUPPORT_LINE_ID`
>
> --- everything below is the earlier (pre-commerce) handover ---

# Handover note for Claude — KOVITAD.shop (pre-commerce)

Current date: 2026-07-11

## Current objective

We started with the KOVITAD Wellness Design System/reference package and moved it toward a deployable `kovitad.shop` site.

The project is now a production-oriented React/Vite frontend with a small Node/Express API, served behind Caddy in exactly one Docker container. Caddy is configured for automatic HTTPS on:

- `kovitad.shop`
- `www.kovitad.shop`

The app is intended to run on an AWS Lightsail 1 GB instance.

## Important security note

The user pasted a GitHub personal access token into chat multiple times. Treat that token as compromised. Do not use it, store it, or repeat it. Tell the user to revoke it and create a new one.

GitHub push is currently blocked only by local GitHub authentication. The repo is otherwise committed and ready.

## Git status

Working tree is clean at the time this note was written.

Current branch:

```bash
main
```

Remote:

```bash
origin https://github.com/kovitad/myshop.git
```

## Useful git history

```bash
fb348ee Ignore local build artifacts
a09d0a5 Build production site with registration and content APIs
1c88fa8 Add GitHub Actions container package workflow
6d339cb Add roadmap and deployment helper scripts
42bf98c Configure HTTPS deployment for kovitad.shop
7ddc326 Add Docker deployment for Lightsail
c4aa6a6 Initial commit: KOVITAD wellness design system
```

### Commit summary

#### `c4aa6a6 Initial commit: KOVITAD wellness design system`

Original design/reference package:

- Brand/design documentation
- `styles.css`
- `tokens/*.css`
- reference components
- guidelines
- templates
- UI kit prototype

#### `7ddc326 Add Docker deployment for Lightsail`

Initial Docker packaging with nginx.

#### `42bf98c Configure HTTPS deployment for kovitad.shop`

Switched deployment to Caddy for automatic HTTPS and configured:

- `kovitad.shop`
- `www.kovitad.shop`

#### `6d339cb Add roadmap and deployment helper scripts`

Added:

- `ROADMAP.md`
- `scripts/deploy-local.sh`
- `scripts/deploy-lightsail.sh`

#### `1c88fa8 Add GitHub Actions container package workflow`

Added GitHub Actions workflow:

```text
.github/workflows/package.yml
```

On push to `main`, it builds and publishes Docker images to GitHub Container Registry:

```text
ghcr.io/kovitad/myshop:latest
ghcr.io/kovitad/myshop:sha-...
```

It uses the built-in `secrets.GITHUB_TOKEN`, not the pasted user token.

#### `a09d0a5 Build production site with registration and content APIs`

Converted the project into a real app:

- Added Vite + React + TypeScript
- Added frontend in `src/`
- Added Node/Express API in `server/index.js`
- Updated Dockerfile to build the frontend and run Node API + Caddy in one container
- Updated Caddy to serve static frontend and reverse proxy `/api/*` to Node on port `3000`
- Added simple JSON persistence at `/data/kovitad.json`

Core APIs:

```text
GET  /api/health
GET  /api/products
GET  /api/content/articles
GET  /api/content/articles/:slug
POST /api/register
POST /api/newsletter/subscribe
POST /api/orders
```

Current functionality:

- Thai-first homepage
- EN/ไทย toggle
- Library page
- Sample article page
- Simple user registration
- Newsletter subscription
- Ebook/product listing
- Basic order reservation with `pending_payment` status

Important limitation:

- Payment is not integrated yet. `/api/orders` only reserves/records an order and returns `pending_payment`.

#### `fb348ee Ignore local build artifacts`

Updated `.gitignore` for local TypeScript/Vite build artifacts:

- `*.tsbuildinfo`
- `vite.config.js`
- `vite.config.d.ts`

## Current file structure highlights

### Frontend

```text
src/main.tsx
src/styles.css
src/vite-env.d.ts
```

The frontend is currently a compact React app in one main file. It includes:

- bilingual copy object
- local route state using History API
- home/library/article pages
- registration section
- newsletter form
- ebook guide cards with order reservation prompt

### API

```text
server/index.js
```

Uses Express and a small JSON file database.

Default DB path:

```text
/data/kovitad.json
```

Seed data includes:

- products/guides
- sample article
- empty users/newsletter/orders arrays

Password hashing uses Node crypto `pbkdf2Sync`. There is no login/session yet.

### Docker/runtime

```text
Dockerfile
docker-entrypoint.sh
Caddyfile
```

Runtime is one Docker container.

Inside the container:

- Node API listens on `127.0.0.1:3000`
- Caddy listens on `80` and `443`
- Caddy serves `/srv/dist`
- Caddy proxies `/api/*` to the Node API

Important env vars:

```text
NODE_ENV=production
PORT=3000
DB_PATH=/data/kovitad.json
XDG_DATA_HOME=/data
XDG_CONFIG_HOME=/config
```

Caddy certs and app JSON DB both live under the `/data` Docker volume in the current configuration.

## Local commands

### Install dependencies

```bash
npm install
```

### Build frontend

```bash
npm run build
```

### Run local Docker preview

```bash
./scripts/deploy-local.sh
```

Or manually:

```bash
docker build -t kovitad-shop .
docker rm -f kovitad-shop-local || true
docker run -d --name kovitad-shop-local -p 8080:80 -v kovitad_data_local:/data kovitad-shop
```

Open:

```text
http://localhost:8080
```

Stop:

```bash
docker rm -f kovitad-shop-local
```

## Verified tests performed

The following worked locally after the production app/API conversion:

```text
/healthz → ok
/api/health → {"ok":true}
/api/products → returns products
/api/newsletter/subscribe → 201
/api/orders → 201
/ → 200
```

Example API tests used:

```bash
curl -fsS http://127.0.0.1:8080/api/health
curl -fsS http://127.0.0.1:8080/api/products
curl -H 'content-type: application/json' \
  -d '{"email":"reader@example.com"}' \
  http://127.0.0.1:8080/api/newsletter/subscribe
curl -H 'content-type: application/json' \
  -d '{"email":"reader@example.com","productId":"steady-energy-plate"}' \
  http://127.0.0.1:8080/api/orders
```

## GitHub Actions/package workflow

Workflow:

```text
.github/workflows/package.yml
```

Purpose:

- Build Docker image on push to `main`
- Push to GHCR

Expected image:

```text
ghcr.io/kovitad/myshop:latest
```

If the package is private, deployment will require:

```bash
echo "NEW_GITHUB_TOKEN" | docker login ghcr.io -u kovitad --password-stdin
```

Do not use the exposed token from chat.

## Deployment plan

See:

```text
DEPLOY.md
```

High-level:

1. Push repo to GitHub.
2. Let GitHub Actions build/publish GHCR package.
3. Create AWS Lightsail Ubuntu 1 GB instance.
4. Attach static IP.
5. Point DNS:

```text
A      @      YOUR_LIGHTSAIL_STATIC_IP
A      www    YOUR_LIGHTSAIL_STATIC_IP
```

6. Open Lightsail firewall:

```text
TCP 80
TCP 443
UDP 443
```

7. Run one container:

```bash
docker pull ghcr.io/kovitad/myshop:latest
docker run -d \
  --name kovitad-shop \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  ghcr.io/kovitad/myshop:latest
```

Caddy should automatically issue HTTPS certificates once DNS points correctly.

## Current blockers

### 1. GitHub auth

`git push -u origin main` failed earlier with:

```text
Invalid username or token. Password authentication is not supported for Git operations.
```

The user needs to authenticate with either:

```bash
gh auth login
```

or a new GitHub PAT when prompted by Git.

### 2. Token exposure

The pasted token must be revoked before any real push/deploy workflow.

### 3. Real payments not connected

Ebook shopping currently records a pending order. Next implementation should connect one of:

- Stripe Payment Links
- Lemon Squeezy
- Gumroad
- Shopify, only if catalog becomes bigger

## Recommended next roadmap

### Immediate

1. Revoke exposed GitHub token.
2. Authenticate GitHub safely.
3. Push `main`.
4. Confirm GitHub Actions passes.
5. Confirm GHCR image exists.
6. Deploy to Lightsail.
7. Verify:

```text
https://kovitad.shop
https://www.kovitad.shop
https://kovitad.shop/healthz
https://kovitad.shop/api/health
```

### Next engineering phase

1. Split `src/main.tsx` into maintainable components:
   - `components/Header.tsx`
   - `components/Footer.tsx`
   - `pages/Home.tsx`
   - `pages/Library.tsx`
   - `pages/Article.tsx`
   - `components/RegisterSection.tsx`
   - `components/Newsletter.tsx`
   - `components/GuideGrid.tsx`
2. Replace prompt-based ebook order email with a branded dialog/form.
3. Add login/session support.
4. Add admin/content management path or MDX content files.
5. Add payment provider.
6. Add SEO:
   - sitemap
   - robots.txt
   - Open Graph metadata
   - canonical URLs
7. Add data export/backup command for `/data/kovitad.json`.

## Brand constraints to preserve

From `CLAUDE.md` and `readme.md`:

- Thai-first.
- No emoji.
- Sentence case, except `.k-eyebrow` labels.
- Prices use `฿`.
- No aggressive medical/supplement claims.
- Copy is educational, not medical advice.
- Keep standing disclaimer near health content.
- Silver is restrained: hairlines, dividers, small shine only.
- Use type wordmark, not logo exploration marks.
- Avoid banned icons: medical cross, DNA, pill, syringe, stethoscope, heavy dumbbells, flame streaks.

## Note about current app architecture

The app is intentionally lightweight for the 1 GB Lightsail target. It does not use a database server. Data is persisted in one JSON file. This is acceptable for an early prototype/MVP but should be migrated later if real user/order volume grows.
