// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://giojung97.github.io",
  trailingSlash: "ignore",
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: false,
    },
  },
});
