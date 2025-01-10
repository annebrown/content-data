---
title: Config
description: '@Nuxt/Content Config'
lastModified: '2025-01-10'
---

```ts
//<--------@/nuxt.config.ts---------------------------------------------------->
import { resolve } from "node:path"; // For Locally Cloned CMS

export default defineNuxtConfig({

    ...

    content: {
            documentDriven: true,

            // Ignore "Number Dot" ordering in /content
            ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

            highlight: {

                theme: {
                    dark: 'github-dark',
                    default: 'github-dark',
                    light: 'github-light',
                },

                langs: ['regexp', 'perl', 'json', 'js', 'ts', 'tsx', 'html', 'css',
                    'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 'java',
                    'diff', 'log', 'mermaid'
                ],
            }, // highlight

            sources: {
                github: { // GitHub Public Repo
                prefix: '/docs-pub', // Route Prefix
                driver: 'github',
                repo: "annebrown/content-base",
                branch: "main",
                dir: "content",
                },
                localDocsPub: {
                    prefix: '/local-docs-pub', // Route Prefix
                    driver: 'fs',
                    base: resolve(__dirname, '/home/anne/devy/prod/content-data/content-data/content'),
                },
                localDocsPriv: {
                    prefix: '/docs-priv', // Route Prefix
                    driver: 'fs',
                    base: resolve(__dirname, '/home/anne/devy/proj/docs-priv/docs-priv/content'),
                },
                // backups: {
                //     prefix: '/local-backups',
                //     driver: 'fs',
                //     base: resolve(__dirname, '~/prod/content-data/backups'),
                // },

            }, // sources

            // Use Cache 4 Dev Server
            // - unless XXserver launched w alias (XXservernocache)
            // - Faster DX for external CMS client dev
            watch: process.env.DISABLE_CONTENT_WATCH === 'true' ? false : {
                ws: { port: 5555, } // WebSocket server
            },

    }, // Content

    ...

})
//<--------@/nuxt.config.ts---------------------------------------------------->
