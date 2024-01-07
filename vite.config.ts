import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import path from 'path';
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: '@',
        replacement: `${path.resolve(__dirname, 'src')}/`,
      }],
  },
  plugins: [
    Vue(),
    VueDevTools(),
    Components({
      dts: true,
      dirs: ["src/components", "src/pages"],
      include: [/\.vue$/, /\.vue\?vue/]
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'vue-i18n', 'pinia'],
      vueTemplate: true,
    }),
  ],

});
