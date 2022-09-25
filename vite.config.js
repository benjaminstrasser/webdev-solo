// vite.config.js

import { viteObfuscateFile } from "vite-plugin-obfuscator";
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/webdev-solo/',
    plugins: [
        ...(process.env.MODE === "DEV" ? [] : [viteObfuscateFile()])
    ],
    build: {
        minify: "esbuild",
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
});
