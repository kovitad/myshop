FROM caddy:2.8-alpine

LABEL org.opencontainers.image.title="KOVITAD.shop"
LABEL org.opencontainers.image.description="Static KOVITAD.shop design system and bilingual UI kit served by Caddy with automatic HTTPS"

COPY Caddyfile /etc/caddy/Caddyfile
COPY . /srv

RUN rm -rf \
  /srv/.git \
  /srv/uploads \
  /srv/.DS_Store

EXPOSE 80 443 443/udp

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
