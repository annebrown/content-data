---
title: 'Page Meta'
description: 'Static and Dynamic Page Meta'
lastModified: '2025-01-08'
---

## Static

'definePageMeta' defines static, custom, page-specific, metadata, including content meta (title,), layout, middleware, type (login) etc:

```vue
<script setup lang="ts">
    definePageMeta({
        title: 'Chapter 1',
        description: "Dude. Where's my Code?",
    })
</script>
```

## Dynamic

Properties set by `definePageMeta` are extracted by a macro and then processed at build time, therefore, its items cannot be dynamic.  Handle dynamic page meta, with the `useHead` composable:

```vue
<script setup lang="ts">
    const pageTitle = ref('Chapter 1')
    const pageDesc = ref("Dude. Where's my Code?")
    useHead({
      title: pageTitle,
      meta: [{ name: 'description', content: pageDescr }]
    })
</script>

<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>{{ pageDesc }}</p>

    <!-- Page Cargo -->

  </div>
</template>
```
