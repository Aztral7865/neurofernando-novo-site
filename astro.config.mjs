// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // A prévia no GitHub Pages define SITE_URL e BASE_PATH (ver .github/workflows/preview.yml).
  site: process.env.SITE_URL || 'https://neurofernando.com.br',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: {
    // Um único HTML com o CSS embutido: uma requisição a menos no celular.
    inlineStylesheets: 'always',
  },
  image: {
    // Fotos responsivas (srcset/sizes) por padrão.
    layout: 'constrained',
  },
  // Fontes da identidade da Aura (Fira Sans), baixadas no build e servidas pelo próprio site.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fira Sans',
      cssVariable: '--font-text',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Fira Sans Extra Condensed',
      cssVariable: '--font-display',
      weights: [600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial Narrow', 'sans-serif-condensed', 'sans-serif'],
    },
  ],
});
