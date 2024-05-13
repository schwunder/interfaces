import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsxImportSource: "@mdx-js/react", // Ensure MDX uses the correct import source for JSX
        // other MDX options
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
