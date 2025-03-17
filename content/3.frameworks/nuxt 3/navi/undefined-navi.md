---
title: Undefined Navi Data
description: Navi Data Unavail when Component Renders
lastModified: '2025-01-08'
---

## Navi Component Logic

```vue
<script setup>
import { useAsyncData, queryContent, fetchContentNavigation } from '#imports'

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(queryContent('/route/path'))
)
</script>
```

## `try-catch`

Isolate errors with:

Wrap `useAsyncData` or `useFetch` in a `try-catch`:

```js
try {
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation(queryContent('/local'))
  )
} catch (error) {
  console.error('Error fetching navigation:', error)
}
```

## `pending`

```vue
<script setup>
const { data: navigation, pending } = await useAsyncData('navigation', () =>
  fetchContentNavigation(queryContent('/local'))
)
</script>

<template>
  <div v-if="pending">Loading navigation...</div>
  <div v-else-if="navigation">
    <NavigationTree :items="navigation" />
  </div>
  <div v-else>Navigation data unavailable</div>
</template>
```

## Computed

```vue
<script setup>
const navigationWithExpand = computed(() => {
  return navigation.value ? addExpandProperty(navigation.value) : []
})
</script>
```

## Logic Check

```vue
<script setup>
watch(() => navigation.value, () => {
  if (navigation.value) {
    // Your logic here
  }
}, { immediate: true })
</script>
```

## Passing to Child Component

Use `v-if`:

```vue
<template>
  <NavigationTree v-if="navigation" :items="navigation" />
</template>
```

## `useLazyAsyncData`

Use `useLazyAsyncData` to render component, then load data:

```vue
<script setup>
const { data: navigation, pending } = useLazyAsyncData('navigation', () =>
  fetchContentNavigation(queryContent('/local'))
)
</script>
```
