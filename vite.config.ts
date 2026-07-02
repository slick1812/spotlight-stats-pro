import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/spotlight-stats-pro/',
  build: {
    outDir: 'dist',
  }
});
