import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";


const viteConfig = defineConfig({
  plugins: [
    mdx(/* jsxImportSource: …, otherOptions… */)
  ]
})

export default viteConfig
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
