# Deploy to AWS Lightsail with one Docker container

This repo is packaged as a static nginx container. It serves the KOVITAD.shop bilingual UI kit and design system files.

## Local test

```bash
docker build -t kovitad-myshop .
docker run --rm -p 8080:80 kovitad-myshop
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

### 1. Install Docker

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

### 2. Clone and run

```bash
git clone https://github.com/kovitad/myshop.git
cd myshop
docker build -t kovitad-myshop .
docker run -d \
  --name kovitad-myshop \
  --restart unless-stopped \
  -p 80:80 \
  kovitad-myshop
```

### 3. Update deployment later

```bash
cd ~/myshop
git pull
docker build -t kovitad-myshop .
docker rm -f kovitad-myshop
docker run -d \
  --name kovitad-myshop \
  --restart unless-stopped \
  -p 80:80 \
  kovitad-myshop
```

## Notes

- This uses exactly one runtime container: nginx.
- The large `uploads/` scratch folder is intentionally excluded from Git and Docker builds.
- External prototype dependencies are loaded from CDN by the UI kit HTML.
