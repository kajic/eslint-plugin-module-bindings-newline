import {
  resolve, 
} from 'path';

import {
  defineConfig, 
} from 'vite';
import {
  viteStaticCopy, 
} from 'vite-plugin-static-copy';


export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'fs',
        'path',
        'url',
      ], 
    },
    outDir: 'dist/plugin',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: '.',
        },
      ],
    }),
  ],
});
