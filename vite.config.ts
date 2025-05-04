import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 1000,
      ignored: ['!**/node_modules/**'],
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs", // GitHub Pages can serve from /docs folder in main branch
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true
  }
}));
