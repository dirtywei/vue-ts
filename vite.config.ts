import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import VitePluginCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': path.join(__dirname, 'src') } },
  plugins: [
    vue(),
    vueJsx(),
    legacy(),
    UnoCSS(),
    AutoImport({ imports: ['vue', 'vue-router', '@vueuse/core'], eslintrc: { enabled: true } }),
    Components({ resolvers: [HeadlessUiResolver()] }),
    VitePluginCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  build: { outDir: 'dist' }, //指定输出路径（相对于 项目根目录)
  esbuild: { drop: ['console', 'debugger'] },
  server: {
    port: 4000,
    host: '0.0.0.0'
    // proxy: {
    //   '/SL': {
    //     target: 'http://xxx.com/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/SL/, '')
    //   }
    // }
  }
})
