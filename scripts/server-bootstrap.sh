#!/usr/bin/env bash
# One-time Lightsail (Ubuntu) preparation: 2 GB swap + Docker engine.
# Run once on a fresh 1 GB instance:  bash server-bootstrap.sh
set -euo pipefail

echo "==> Adding 2 GB swap (safety net for 1 GB RAM)"
if [ ! -f /swapfile ]; then
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab >/dev/null
else
  echo "    /swapfile already exists, skipping"
fi

echo "==> Installing Docker engine"
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
if [ ! -f /etc/apt/keyrings/docker.gpg ]; then
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg
fi
. /etc/os-release
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu ${VERSION_CODENAME} stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin
sudo usermod -aG docker "$USER" || true

echo ""
echo "==> Done. Next:"
echo "    1) log out and back in (so the docker group applies), then:"
echo "    2) curl -O https://raw.githubusercontent.com/kovitad/myshop/main/.env.example"
echo "       mv .env.example .env && nano .env      # fill in secrets"
echo "    3) curl -O https://raw.githubusercontent.com/kovitad/myshop/main/scripts/deploy-lightsail.sh"
echo "       chmod +x deploy-lightsail.sh && ./deploy-lightsail.sh"
