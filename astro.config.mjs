import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // La integración oficial se encarga de todo, no necesitas plugins de vite
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});