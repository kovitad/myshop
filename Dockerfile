# Node 24: built-in `node:sqlite` is stable (no native module to compile).
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine

LABEL org.opencontainers.image.title="KOVITAD.shop"
LABEL org.opencontainers.image.description="KOVITAD.shop learning platform: ebooks, courses, membership, Stripe checkout, and Caddy automatic HTTPS"

RUN apk add --no-cache caddy
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY server ./server
COPY ebooks ./ebooks
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv/dist
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENV NODE_ENV=production
ENV PORT=3000
ENV DB_PATH=/data/kovitad.db
ENV EBOOK_DIR=/app/ebooks
ENV XDG_DATA_HOME=/data
ENV XDG_CONFIG_HOME=/config

EXPOSE 80 443 443/udp
VOLUME ["/data", "/config"]

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1

CMD ["docker-entrypoint.sh"]
