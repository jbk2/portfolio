import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // base: '/portfolio/', // explicit path prefix required if to be served as a github page
  plugins: [
    react(),
    tailwindcss(),
  ],
})
