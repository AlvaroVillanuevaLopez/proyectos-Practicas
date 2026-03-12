import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Reemplaza con tu nombre de usuario y el nombre de tu repositorio
  site: 'https://AlvaroVillanuevaLopez.github.io',
  base: '/proyectos-Practicas',
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});