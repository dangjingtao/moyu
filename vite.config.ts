import { defineConfig } from "vite";
import { miraDocs } from "@uichat-mira/docs/vite";
import { miraConfig } from "./mira.config.ts";

export default defineConfig({
  plugins: [
    miraDocs({
      contentDir: "content",
      config: miraConfig,
      staticRoutes: true,
    }),
  ],
});
