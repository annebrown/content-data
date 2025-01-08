---
title: Config
description: '@Nuxt/Content Config'
lastModified: '2025-01-08'
---

```ts
//<--------@/nuxt.config.ts---------------------------------------------------->
...

content: {
	documentDriven: true,

    // RegExp -  Ignore "Number Dot" ordering in /content
    ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

    highlight: {
        theme: {
            dark: 'github-dark',
            default: 'github-dark',
            light: 'github-light',
        },

    langs: ['regexp', 'perl', 'json', 'js', 'ts', 'tsx', 'html', 'css', 'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 'java', 'diff', 'log' ],
			},

    sources: {
        github: {
          prefix: '/docs', // Route Prefix
          driver: 'github',
          repo: "annebrown/content-base",
          branch: "main",
          dir: "content",
        },
        local: {
            prefix: '/local',
            driver: 'fs',
            base: resolve(__dirname, '/home/anne/prod/content-data/content-data/content'),
        },
        backups: {
            prefix: '/local-backups',
            driver: 'fs',
            base: resolve(__dirname, '/home/anne/prod/content-data/backups'),
	}, // sources
}, // content

   ...
//<--------@/nuxt.config.ts---------------------------------------------------->
