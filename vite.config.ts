import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Default to "/" for Amplify, allow override with VITE_BASE for GitHub Pages
  const base = env.VITE_BASE && env.VITE_BASE.startsWith("/") ? env.VITE_BASE : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      // Output to repo-level docs for GitHub Pages
      // (within the repository root)
      outDir: "docs",
      emptyOutDir: true,
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
  };
});
