import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['*.astro'],
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ['dist', 'node_modules', '.astro', 'public/legacy', '*.config.js'],
  },
];
