// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "index.html", // Only the main HTML file is needed
    },
  },
});

