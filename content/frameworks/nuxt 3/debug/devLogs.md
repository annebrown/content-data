---
title: devLogs
description: Stream Server Logs to Client
lastModified: '2025-01-08'
---

## Enable `devLogs`

Config `nuxt.config.ts` to enable `devLogs`:

```ts
export default defineNuxtConfig({
  features: {
    devLogs: true
  }
})
```

## `dev:ssr-logs` Hook

The `dev:ssr-logs` hook is called with an array of server-side logs that have been passed to the client.

Add `dev:ssr-logs` hook in a plugin `@/plugins/ssr-logs.ts`:

```ts
// @/plugins/ssr-logs.js
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('dev:ssr-logs', (logs) => {
    console.log('SSR Logs:', logs)

    // rocess or send logs to a logging service
    logs.forEach(log => {
      // Process each log entry
      console.log(`Log type: ${log.type}, message: ${log.message}`)
    })
  })
})
```

 `dev:ssr-logs` hook is only called dev mode.

## Silence Logs

Set `devLogs` to `silent` in `nuxt.config.ts`:

```ts

```
