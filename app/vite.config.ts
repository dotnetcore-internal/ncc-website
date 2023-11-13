import {fileURLToPath, URL} from "node:url";

import {defineConfig, splitVendorChunkPlugin} from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from '@rah-emil/vite-plugin-vue-type-imports'
import vitePluginImp from 'vite-plugin-imp';

import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightJS from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import MarkdownItPrism from 'markdown-it-prism';
import {align} from "@mdit/plugin-align";
import { mark } from "@mdit/plugin-mark";

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
        Markdown({
            markdownItOptions: {
                html: true,
                xhtmlOut: true,
                breaks: true,
                linkify: true,
                typographer: true
            },
            markdownItSetup(md) {
                md.use(MarkdownItAbbr)
                    .use(MarkdownItAnchor)
                    .use(MarkdownItFootnote)
                    .use(MarkdownItHighlightJS)
                    .use(MarkdownItSub)
                    .use(MarkdownItSup)
                    .use(MarkdownItTaskLists)
                    .use(MarkdownItTOC)
                    .use(MarkdownItPrism)
                    .use(align)
                    .use(mark);
            },
            // Class names for the wrapper div
            wrapperClasses: 'markdown-body'
        }),
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
