## Build context

- Hand build index.html.
- Runs Tailwind CSS - manually purge with; `npx tailwindcss -i ./src/input.css -o ./assets/stylesheets/styles.css --minify`, add --watch flag to watch for changes and auto rebuild css.
- for nginx server index needs to uses /assets/... path not ../assets/... path which is uses locally.
