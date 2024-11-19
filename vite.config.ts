import { defineConfig, type PluginOption } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react-swc'
import vitePluginSvgr from 'vite-plugin-svgr'
import svgr from '@svgr/rollup'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr(),
    svgr({ dimensions: false, svgo: false, typescript: true }),
    macrosPlugin(),
    visualizer() as PluginOption
  ],
  define: {
    'process.env': process.env
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@db': '/src/db',
      '@fonts': '/src/fonts',
      '@hooks': '/src/hooks',
      '@i18n': '/src/i18n',
      '@interfaces': '/src/interfaces',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@redux': '/src/redux',
      '@styles': '/src/styles',
      '@translate': '/src/translate',
      '@type': '/src/type',
      '@ui': '/src/ui',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets'
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        quietDeps: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
