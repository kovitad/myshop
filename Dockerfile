FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="KOVITAD.shop design system"
LABEL org.opencontainers.image.description="Static KOVITAD.shop design system and bilingual UI kit served by nginx"

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

RUN rm -rf \
  /usr/share/nginx/html/.git \
  /usr/share/nginx/html/uploads \
  /usr/share/nginx/html/.DS_Store

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
