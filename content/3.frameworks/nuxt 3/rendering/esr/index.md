---
title: Edge-Side Rendering
description: Leveraging Edge Functions
navigation: false
lastModified: '2025-01-13'
---

## Description

ESR renders an app closer to a user via edge servers of a CDN.  The closest edge server intercepts the request and renders the page for the user. This allows for reduced lateny and better perf, because the data to be rendered is physically closer to a user.

Ex, Vercel's edge functions can be enabled for a project by setting the `NITRO_PRESET=vercel-edge` env var prior to build.
An app can also be configured to support hybrid rendering.

## ESR

To leverage a hosts's ESR capabilities, config an app's `nuxt.config.ts`, to set the NITRO_PRESET=vercel-edge environment variable:

```ts
//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge'
  }
})
//<--------@/nuxt.config.ts---------------------------------------------------->

```

## Hybrid

Route rules can to be used to achieve hybrid rendering:

```ts
//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({

    ...

    extends: ['../../base'],

    routeRules: {
        '/': { prerender: true },

        // Cache products routes for 1hr, use fresh content when loaded
        '/products/**': { swr: 3600 },

        // Add CORS headers to api routes, for access from different origins
        '/api/**': { cors: true }
    }

    ...

})
//<--------@/nuxt.config.ts---------------------------------------------------->
```
