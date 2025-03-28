---
title: DevTools
description: Nuxt Development Tools
lastModified: '2025-01-08'
---

## Enable DevTools

Config Nuxt to enable DevTools in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  devtools: { enabled: true }
})
```

Nuxt then automatically installs the DevTools module and adds `@nuxt/devtools` to modules in `nuxt.config.ts`.
