import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

const viteConfig = defineConfig({
  plugins: [
    // MDX plugin configured to run before the React plugin
    { enforce: 'pre', ...mdx({
      jsxImportSource: '@mdx-js/react', // specify JSX runtime, React in this case
      // other MDX options can be specified here
    })},
    // React plugin to handle JSX/TSX files
    react({
      include: '**/*.{jsx,tsx,js,ts,mdx}' // specify file types to include
    })
  ]
});

export default viteConfig;