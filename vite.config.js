import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [ViteMinifyPlugin({}), ViteImageOptimizer({})],
  base: 'https://nuriarivasbotello.github.io/new-portfolio/',
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nuriva: resolve(__dirname, 'src/html/nuriva.html'),
        magazine: resolve(__dirname, 'src/html/magazine.html'),
        nihonfest: resolve(__dirname, 'src/html/nihonfest.html'),
        nuriarivas: resolve(__dirname, 'src/html/nuriarivas.html'),
        doctorpad: resolve(__dirname, 'src/html/doctorpad.html'),
        holyweek: resolve(__dirname, 'src/html/holyweek.html')
        // Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
      }
    },
    outDir: '../docs'
  }
});
