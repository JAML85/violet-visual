// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jmanchado.net', // <-- Añades esta línea aquí con la coma al final
  vite: {
    plugins: [tailwindcss()]
  }
});