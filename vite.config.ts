import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // Use relative paths for assets
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
    outDir: "docs",
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true,
    // Use legacy build mode to avoid MIME type issues with GitHub Pages
    target: 'es2015',
    rollupOptions: {
      output: {
        // Ensure proper MIME types by using standard extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Use IIFE format instead of ESM for GitHub Pages compatibility
        format: 'iife'
      }
    }
  }
}));
