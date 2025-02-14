---
title: Polyfills
description: XXXXXXXX
lastModified: '2025-02-12'
---

## Purpose

Polyfills provide code required to use `fetch` in envs where global `fetch` is not available, such as old browsers or servers without native `fetch` APIs.

## serverURLPolyfill

'nuxt.config.ts':

```ts
    serverURLPolyfill: 'url'
```
