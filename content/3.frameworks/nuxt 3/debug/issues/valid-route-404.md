---
title: Valid Route 404
description: 404 for Valid '@/pages/' Routes
lastModified: '2025-03-20'
---

## Description

Each `/pages` route loads as expected, but produces a dev console 404 error message showing a URL-encoded route.

## Solution

Bug fixed in [PR](https://github.com/nuxt/nuxt/pull/27016).  Upgrade from Nuxt 3.16.0 to 3.16.1:

```bash
pnpm dlx nuxi upgrade
```
