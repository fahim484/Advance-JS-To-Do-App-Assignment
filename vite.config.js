// Vite configaration file:

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        script: resolve(__dirname, "script.js"),
      },
    },
  },
});
