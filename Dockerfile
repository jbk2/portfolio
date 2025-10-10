# build locally: npm run build -> ./dist
FROM nginx:1.27-alpine
COPY dist/ /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=2s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
