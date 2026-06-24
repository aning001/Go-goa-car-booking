import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(process.env.GOOGLE_MAPS_PLATFORM_KEY || '')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          thar: path.resolve(__dirname, 'thar-rental.html'),
          luxury: path.resolve(__dirname, 'luxury-rental.html'),
          family: path.resolve(__dirname, 'family-rental.html'),
          fleet: path.resolve(__dirname, 'fleet.html'),
          services: path.resolve(__dirname, 'services.html'),
          blogs: path.resolve(__dirname, 'blogs.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          faq: path.resolve(__dirname, 'rental-faq.html'),
          terms: path.resolve(__dirname, 'terms-and-privacy.html'),
          carDetails: path.resolve(__dirname, 'car-details.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
