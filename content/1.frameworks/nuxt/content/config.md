---
title: Config
description: '@Nuxt/Content Config'
---

```ts
// @Nuxt/Content Module
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
    
        langs: ['regexp', 'json', 'js', 'ts', 'tsx', 'html', 'css', 'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 'java', 'diff' ],
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
        },
    }  
}, // Content
```ts
