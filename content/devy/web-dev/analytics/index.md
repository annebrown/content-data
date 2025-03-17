---
title: Analytics
description: Hosting Events
navigation: false
lastModification: 2025-01-22
---


## Vercel

Install Vercel Analytics:

```bash
pnpm i @vercel/analytics
```

Import and add Analytics component to app.  For Nuxt:

```vue
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPath />
</template>
```
