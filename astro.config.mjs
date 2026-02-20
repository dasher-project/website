import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://dasher.at',
  integrations: [
    mdx(),
    react(),
  ],
  output: 'static',
  image: {
    serviceEntry: true,
  },
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'da', 'de', 'nl', 'fa', 'fr', 'it', 'ja', 'no', 'pl', 'pt', 'ru', 'es', 'sv'],
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
