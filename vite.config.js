// vite.config.js

import { viteObfuscateFile } from "vite-plugin-obfuscator";
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/webdev-solo/',
    plugins: [
        viteObfuscateFile()
    ],
    build: {
        minify: "esbuild",
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
});
