// vite.config.js

import { defineConfig } from 'vite';
export default defineConfig({
    base: '/webdev-solo/',
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
});
