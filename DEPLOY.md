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

### 4. Clone and run one container

```bash
git clone https://github.com/kovitad/myshop.git
cd myshop
docker build -t kovitad-shop .
docker run -d \
  --name kovitad-shop \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  kovitad-shop
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

```bash
cd ~/myshop
git pull
docker build -t kovitad-shop .
docker rm -f kovitad-shop
docker run -d \
  --name kovitad-shop \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  kovitad-shop
```

## Notes

- This uses exactly one runtime container: Caddy.
- Caddy stores HTTPS certificates in the Docker volume `caddy_data`.
- The large `uploads/` scratch folder is intentionally excluded from Git and Docker builds.
- External prototype dependencies are loaded from CDN by the UI kit HTML.
