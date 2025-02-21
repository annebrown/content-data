---
title: Rendering
description: Component Rendering
navigation: false
lastModified: '2025-02-21'
---

## Rendering

By default, Nuxt uses [universal rendering](/content/devy/web-dev/rendering/index.md) (rendered on server, then rehydrated by client), but components can alo be designed for client-side, server-side, edge-side, or a combination.

## Client-Side

Add `.client` suffix to make a component render on the client-side

## Server-Side

To render a component only on the server, add a `.server` suffix to the component name and enable by configuring `nuxt.config.ts` with:

```ts
export default defineNuxtConfig({
  experimental: {
    componentIslands: true
  }
})
```

## Hybrid

To partially hydrate a component, set the `nuxt-client` attribute on the server component:

```
<template>
  <div>
    <SomeComponent />
    <!-- Loaded and hydrated client-side -->
    <AnotherComponent nuxt-client :var="some string" />
  </div>
</template>
```
