---
title: LogLevel
description: Configure Nuxt Logging
lastModified: '2025-01-08'
---

## Dev Server Command

Add `--log-level info` to dev server script in `package.json`:

```json
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev --host 192.168.5.555 --port 5555 --log-level info"
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  },
```

Nuxt Config

Configure `LogLevel` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  logLevel: 'info'
})
```

See: [Nuxt Configuration - logLevel](https://nuxt.com/docs/api/nuxt-config#loglevel)
