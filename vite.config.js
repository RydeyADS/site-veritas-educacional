import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// DEMO_SINGLE=1 gera um único arquivo HTML autocontido (demo/index.html):
// tudo inline (JS, CSS e até a fonte dos ícones) e rotas em hash, para que a
// demo funcione aberta direto do disco, sem servidor.
const demoUnico = process.env.DEMO_SINGLE === '1'

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Lido pelo router para escolher entre histórico web e hash.
  define: {
    __DEMO_SINGLE__: JSON.stringify(demoUnico),
  },
  base: demoUnico ? './' : '/',
  server: {
    port: 5173,
    open: true,
  },
  build: demoUnico
    ? {
        outDir: 'demo',
        emptyOutDir: true,
        cssCodeSplit: false,
        // Inline de qualquer asset (inclusive as fontes dos ícones) como data URI.
        assetsInlineLimit: 64 * 1024 * 1024,
        rollupOptions: {
          output: {
            // Sem chunks separados: o HTML único não consegue buscar arquivos irmãos.
            inlineDynamicImports: true,
          },
        },
      }
    : undefined,
})
