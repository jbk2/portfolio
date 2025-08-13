## Build context

- Hand built index.html.
- Runs Tailwind CSS CLI directly - manually purge and update with;
  `npx tailwindcss -i ./src/input.css -o ./assets/stylesheets/styles.css --minify`,
  add `--watch` flag to watch for changes whilst in dev and auto rebuild on each change.

## Local vs Server config

- Asset paths:
  - Local & server: `/assets/...`
- some css & js mime type recognision issues/solutions:
  - clear cloudflare and local cache
  - explicitly add mime.types in nginx config
  - restart nginx container
