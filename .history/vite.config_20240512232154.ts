import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx,js,ts,mdx}' // Specify the file types here if necessary
    }),
    mdx({
      jsxImportSource: '@mdx-js/react', // Ensure MDX uses the correct import source for JSX
      // other MDX options
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})