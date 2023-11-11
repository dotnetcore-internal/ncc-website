import {fileURLToPath, URL} from "node:url";

import {defineConfig, splitVendorChunkPlugin} from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from '@rah-emil/vite-plugin-vue-type-imports'
import vitePluginImp from 'vite-plugin-imp';
import Markdown from 'unplugin-vue-markdown/vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
        }),
        VueTypeImports(),
        splitVendorChunkPlugin(),
        vitePluginImp({
            libList: [
                {
                    libName: "@icon-park/vue-next",
                    libDirectory: "es/icons",
                    camel2DashComponentName: false
                }
            ]
        }),
        Markdown({ /* options */}),
    ],
    build: {
        target: 'es2018',
        outDir: '../docs',
        emptyOutDir: false,
        manifest: true,
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            }
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
