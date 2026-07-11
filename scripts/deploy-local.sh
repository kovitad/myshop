#!/usr/bin/env sh
set -eu

IMAGE_NAME="kovitad-shop"
CONTAINER_NAME="kovitad-shop-local"
PORT="${PORT:-8080}"

docker build -t "$IMAGE_NAME" .
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
docker run -d \
  --name "$CONTAINER_NAME" \
  -p "$PORT:80" \
  "$IMAGE_NAME"

echo "KOVITAD.shop is running locally: http://localhost:$PORT"
echo "Health: http://localhost:$PORT/healthz"
