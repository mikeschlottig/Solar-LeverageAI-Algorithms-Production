import path from 'path'
import { defineConfig, createLogger, Logger } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      hmr: {
        overlay: false
      },
      allowedHosts: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: !isProd,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            algorithms: ['mathjs', 'd3'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
            three: ['three', '@react-three/fiber', '@react-three/drei']
          }
        }
      }
    },
    define: {
      global: 'globalThis',
    },
  }
})