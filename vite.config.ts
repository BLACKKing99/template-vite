import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/ // .vue
      ],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: './auto/auto-imports.d.ts',
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './tsconfig.node.json',
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dts: './auto/auto-components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['src/components/common'],
      extensions: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
      'components/': `${resolve(__dirname, './src/components')}/`,
      'views/': `${resolve(__dirname, './src/views')}/`,
      'api/': `${resolve(__dirname, './src/api')}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variable.scss";'
      }
    }
  }
})
