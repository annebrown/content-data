---
title: watch
description: Content Watcher
lastModified: '2025-01-08'
---

## Purpose

Control content watching

```ts
export default defineNuxtConfig({
  content: {
    watch: process.env.DISABLE_CONTENT_WATCH === 'true' ? false : {
      ws: { port: 5555, // WebSocket }
    }
  }
})
```

WebSocket is a communication protocol that uses real-time, bi-directional communications over a single TCP connection between server and client software.

The WebSocket Server allows the Nuxt dev server to push updates to the browser, (on content, config or code change) without requiring a page reload.

When styling or working on other aspects that do not require latest `/content` source versions, disable watching before launching dev server:

```bash
DISABLE_CONTENT_WATCH=true pnpm dev
```

This `watch` config is specific to @Nuxt/content and differs from the `watch` property in Nuxt config.
