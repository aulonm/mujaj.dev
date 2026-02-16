import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

const config = defineConfig({
  optimizeDeps: {
    exclude: ['@tanstack/devtools', '@tanstack/react-devtools'],
  },
  ssr: {
    optimizeDeps: {
      exclude: ['@tanstack/devtools', '@tanstack/react-devtools'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
  ],
})

export default config
