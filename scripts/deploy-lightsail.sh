#!/usr/bin/env sh
# Deploy KOVITAD.shop on an AWS Lightsail 1 GB instance by PULLING the prebuilt
# image from GHCR (do NOT build on a 1 GB box — vite/tsc can OOM there; let
# GitHub Actions build it). Reads runtime secrets from ./.env (see .env.example).
set -eu

IMAGE="${IMAGE:-ghcr.io/kovitad/myshop:latest}"
CONTAINER_NAME="kovitad-shop"
ENV_FILE="${ENV_FILE:-.env}"

if [ ! -f "$ENV_FILE" ]; then
  echo "Missing $ENV_FILE — copy .env.example to .env and fill it in first." >&2
  exit 1
fi

docker pull "$IMAGE"
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  --env-file "$ENV_FILE" \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  "$IMAGE"

echo "KOVITAD.shop is running from $IMAGE."
echo "Data + uploaded ebooks + TLS certs persist in the 'caddy_data' volume (/data)."
echo "Check:  docker ps --filter name=$CONTAINER_NAME"
echo "Health: curl http://127.0.0.1/healthz"
echo "Update: re-run this script (it re-pulls :latest)."
