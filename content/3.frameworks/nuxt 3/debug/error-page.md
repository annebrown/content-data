---
title: Error Handling
description: Nuxt Error Handling
lastModified: '2025-01-08'
---

`@/error.vue`:

```vue
<script setup lang="ts">
	import type { NuxtError } from '#app'
	defineProps({ error: Object as () => NuxtError })
</script>

<template><div>
<h1>ERROR</h1>
<p>Error message...</p>
<p>Error: : {{ error.statusCode }}</p>
<p>
	<a href="javascript:history.back()" class="goback">
		<Icon name="ph:arrow-left" class="h-4 w-4 align-middle" />
        Go Back
    </a>
</p>
</template>
```

`@/pages/[...slug].vue`:

```vue
<script lang="ts" setup>
    const route = useRoute()

    const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

    if (!page.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found.', fatal: true })
    }
</script>

<template>
    <NuxtLayout name="layout-name">
        <ContentRenderer :value="page" />
    </NuxtLayout>
</template>
```
