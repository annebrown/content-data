---
title: Remote Sources
description: Using Remote Sources for Content Module
---

## Config

Sample `@@/nuxt.config.ts` config for a GitHub `@Nuxt/Content` public repo:

```json
content: {
    documentDriven: true,
    // Ignore "Number Dot" ordering in /content
    ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

    sources: {
        github: {
          prefix: '/remote-docs', // Route prefix for remote contents
          driver: 'github', // Unstorage driver 
          repo: "annebrown/repo-name",
          branch: "main",
          dir: "content", // Dir in external repo where contents are located.
        },
    }

},

```

## Workflow

To publish changes, each deployment built using this remote source must be redeployed without existing cache.

## Added Costs

Using or adding a remote content source won't significantly impact costs.

Pricing is based on BW, serverless function execution, and build minutes, rather than on the source of the content.

### Dev Builds

No extra costs for dev builds when using public repo for content.

### Prod Builds

### Build Time

Vercel fetches content from public repo during build process, so incurs no additional costs beyond normal Vercel build usage.

### Runtime

#### SSG

No additional costs at runtime.  Content fetched and built into static pages during build process.

#### SSR and ISR

Content fetched at runtime. Edge Network optimizes and caches content. Actual cost impact depends on usage patterns, like update freq and number of received requests.

Use caching strategies to minimize repeated requests to remove content source.

## Local Dev

Config `nuxt.config.ts` to access locally cloned content repo,   to avoid deployment rebuilds for previewing changes:

```js
local: {
    prefix: '/local', // Prefix for routes
    driver: 'fs',
    base: resolve(__dirname, '/path/to/repo/content'),
},
```

