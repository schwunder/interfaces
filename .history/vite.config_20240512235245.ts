import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";

const customResolverPlugin = {
  name: "resolve-plugin",
  setup(build) {
    build.onResolve({ filter: /^@mdx-js\/react$/ }, () => {
      return { path: require.resolve("@mdx-js/react") };
    });
  },
};

export default defineConfig({
  plugins: [
    customResolverPlugin,
    react(),
    mdx({
      jsxImportSource: "@mdx-js/react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
