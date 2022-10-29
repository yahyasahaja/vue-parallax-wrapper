
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outputDir: ['dist', 'types'],
      include: ['lib/main.ts', 'lib/types.ts', 'lib/Parallax.vue'],
      staticImport: true,
      skipDiagnostics: false,
      logDiagnostics: true,
      rollupTypes: true,
      insertTypesEntry: true
    }),
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'vue-parallax-wrapper',
      fileName: 'vue-parallax-wrapper'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
