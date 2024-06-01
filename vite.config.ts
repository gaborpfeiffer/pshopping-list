import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png'], //'masked-icon.svg'
  manifest: {
    name: 'P+ShoppingList',
    short_name: 'PShopList',
    description: 'Single page shopping list app',
    icons: [
      {
        src: '/pshopping-list/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pshopping-list/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pshopping-list/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      // {
      //   src: '/pshopping-list/maskable_icon.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      //   purpose: 'maskable',  // Javítva: 'any maskable' -> 'maskable'
      // },
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: 'standalone',
    scope: '/pshopping-list',
    start_url: '/pshopping-list',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pshopping-list/',
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
