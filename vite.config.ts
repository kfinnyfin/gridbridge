import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths make this work on GitHub Pages whether the repo is
  // username.github.io or username.github.io/repo-name.
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});
