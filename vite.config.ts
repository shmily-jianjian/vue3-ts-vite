import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		// 自动引入组件库
		AutoImport({
			resolvers: [NaiveUiResolver()],
			dts: 'src/types/auto-imports.d.ts',
		}),
		Components({
			dirs: [],
			resolvers: [NaiveUiResolver()],
			directoryAsNamespace: true,
			dts: 'src/types/components.d.ts',
		}),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    open: true
  }
})
