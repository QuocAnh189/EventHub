import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from 'vite-plugin-svgr'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), macrosPlugin()],
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
  }
})
