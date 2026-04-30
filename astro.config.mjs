import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // If you don't have integrations yet, an empty array often clears this error
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});