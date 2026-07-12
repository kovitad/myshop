# Deploy to AWS Lightsail with one Docker container

This repo is packaged as a static Caddy container. It serves the KOVITAD.shop bilingual UI kit and automatically provisions HTTPS for:

```text
https://kovitad.shop
https://www.kovitad.shop
```

## Local test

```bash
docker build -t kovitad-shop .
docker run --rm -p 8080:80 kovitad-shop
```

Open:

```text
http://localhost:8080
```

Health check:

```bash
curl http://localhost:8080/healthz
```

## Lightsail 1 GB instance

Recommended instance: Ubuntu on a 1 GB Lightsail plan.

### 1. Point DNS to Lightsail

In AWS Lightsail:

1. Create or open your instance.
2. Attach a **static IP**.
3. In your domain DNS provider, add these records:

```text
A      @      YOUR_LIGHTSAIL_STATIC_IP
A      www    YOUR_LIGHTSAIL_STATIC_IP
```

Wait for DNS propagation. You can check with:

```bash
dig +short kovitad.shop
dig +short www.kovitad.shop
```

Both should return your Lightsail static IP.

### 2. Open firewall ports

In the Lightsail Networking tab, allow:

```text
TCP 80
TCP 443
UDP 443
```

UDP 443 is optional but enables HTTP/3.

### 3. Install Docker

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
. /etc/os-release
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $VERSION_CODENAME stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin
sudo usermod -aG docker $USER
```

Log out and back in, or run:

```bash
newgrp docker
```

### 3b. Add swap (recommended on 1 GB)

A 2 GB swap file prevents the container from being OOM-killed under load:

```bash
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 3c. Create the runtime .env

The app now needs runtime secrets (Stripe, email, admin). Copy the template and fill it in:

```bash
curl -O https://raw.githubusercontent.com/kovitad/myshop/main/.env.example
mv .env.example .env
nano .env   # set STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, ADMIN_EMAIL, RESEND_API_KEY, APP_URL=https://kovitad.shop
```

Keep `.env` on the server only — never commit it.

### 4. Run one container (pull the prebuilt image — do NOT build on 1 GB)

GitHub Actions builds and publishes the image on every push to `main`. On the server, just pull and run it with your `.env`:

```bash
docker pull ghcr.io/kovitad/myshop:latest
docker run -d \
  --name kovitad-shop \
  --restart unless-stopped \
  --env-file .env \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  ghcr.io/kovitad/myshop:latest
```

Or simply run the helper (pulls `:latest` + uses `.env`): `./scripts/deploy-lightsail.sh`.

The SQLite database, admin-uploaded ebooks, and Caddy TLS certificates all
persist in the `caddy_data` volume (`/data`).

If the GHCR package is private, first log in with a GitHub token that has
`read:packages` (or make the package public in GitHub → Packages → settings):

```bash
echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u kovitad --password-stdin
```

Alternative (not recommended on 1 GB — may OOM): clone and build on the server:

```bash
git clone https://github.com/kovitad/myshop.git
cd myshop
./scripts/deploy-lightsail.sh
```

Caddy will request the SSL certificate automatically once DNS points to the server.

### 5. Verify

```bash
curl http://YOUR_LIGHTSAIL_STATIC_IP/healthz
curl https://kovitad.shop/healthz
```

Open:

```text
https://kovitad.shop
```

### 6. Update deployment later

Whenever you push to `main`, GitHub Actions rebuilds the image. On the server,
just re-run the helper (it re-pulls `:latest` and reuses `.env` + the volume):

```bash
./scripts/deploy-lightsail.sh
```

Or manually:

```bash
docker pull ghcr.io/kovitad/myshop:latest
docker rm -f kovitad-shop
docker run -d \
  --name kovitad-shop \
  --restart unless-stopped \
  --env-file .env \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  ghcr.io/kovitad/myshop:latest
```

If building directly from the repo instead:

```bash
cd ~/myshop
git pull
./scripts/deploy-lightsail.sh
```

## Notes

- This uses exactly one runtime container. Inside it, Caddy serves HTTPS/static files and proxies `/api/*` to the Node API.
- Caddy HTTPS certificates, the SQLite database (`/data/kovitad.db`), admin-uploaded ebooks (`/data/ebooks`), and rotated DB backups (`/data/backups`) all persist in the Docker volume `caddy_data` mounted at `/data`.
- The large `uploads/` scratch folder is intentionally excluded from Git and Docker builds.

### Security

- Set `ADMIN_PASSWORD` in `.env`. The admin account is created on first boot and locked — the admin email cannot be claimed via the public sign-up.
- Caddy sends HSTS, CSP, X-Frame-Options, and related headers on the live domain.
- Stripe secrets stay in `.env` only (never in the image/repo). Card data is handled entirely by Stripe (Payment Links).

### Backups

- The app writes a daily `VACUUM INTO` snapshot to `/data/backups` (keeps the last 7; tune with `BACKUP_KEEP` / `BACKUP_INTERVAL_HOURS`).
- These live in the same volume — for real disaster recovery, copy them off-box, e.g. from your laptop:

```bash
scp -r ubuntu@YOUR_STATIC_IP:/var/lib/docker/volumes/caddy_data/_data/backups ./kovitad-backups
```

Or dump the current DB on demand: `docker exec kovitad-shop sh -c "cp /data/kovitad.db /data/backups/manual-$(date +%F).db"`.
