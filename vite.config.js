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
        about: resolve(__dirname, 'src/html/about.html'),
        contact: resolve(__dirname, 'src/html/contact.html'),
        projects: resolve(__dirname, 'src/html/projects.html'),
        nuriva: resolve(__dirname, 'src/html/nuriva.html')
        // Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
      }
    },
    outDir: '../docs'
  }
});
