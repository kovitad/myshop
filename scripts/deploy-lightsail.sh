#!/usr/bin/env sh
set -eu

IMAGE_NAME="kovitad-shop"
CONTAINER_NAME="kovitad-shop"

docker build -t "$IMAGE_NAME" .
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v caddy_data:/data \
  -v caddy_config:/config \
  "$IMAGE_NAME"

echo "KOVITAD.shop container is running."
echo "Check: docker ps --filter name=$CONTAINER_NAME"
echo "Health: curl http://127.0.0.1/healthz"
echo "Domain: https://kovitad.shop"
