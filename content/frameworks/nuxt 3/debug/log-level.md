---
title: LogLevel
description: Configure Nuxt Logging
lastModified: '2025-03-14'
---

## Dev Server Command

In `package.json`, add `--log-level info` to dev server script args:

```json
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev --host 192.168.5.555 --port 5555 --log-level info"
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  },
```

## Nuxt Config

Configure `LogLevel` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  logLevel: 'info'
})
```

See: [Nuxt Configuration - logLevel](https://nuxt.com/docs/api/nuxt-config#loglevel)
