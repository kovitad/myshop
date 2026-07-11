#!/usr/bin/env sh
set -eu

node /app/server/index.js &
API_PID=$!

caddy run --config /etc/caddy/Caddyfile --adapter caddyfile &
CADDY_PID=$!

trap 'kill $API_PID $CADDY_PID 2>/dev/null || true' INT TERM

wait -n $API_PID $CADDY_PID
