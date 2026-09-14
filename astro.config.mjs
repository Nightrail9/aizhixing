// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://nightrail9.github.io',
  base: '/aizhixing',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: true,
    },
  },
  // Tailwind accepts Astro's bundled Vite runtime; the cast avoids duplicate
  // Vite type identities introduced by npm's nested dependency resolution.
  vite: { plugins: [/** @type {never} */ (tailwindcss())] },
});
