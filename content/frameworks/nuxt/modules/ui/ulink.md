---
title: ULink
description: ULink Component
navigation: false
---

`ULink` from Nuxt's @nuxt/ui module adds these props to `<NuxtLink>`:

### Active Classes

`active-class`  and `inactive-class` provide for  conditional styling

See [Nuxt VSCode Config](/tooling/VSCode/Nuxt) to setup IntelliSense autocompletion for `active-class` and `inactive-class`

### Exact

`exact` adds styling for when a link is active and the link's path exactly matches the current route. 

### Exact Query Partial

Use `exact-query='partial'` with `active-class` for styling when the link is active and its path partially matches the current query.  

## Usage

```vue
<template>
  <ULink
    to="/components/link"
    active-class="text-current"
    inactive-class="text-[--primary-light] dark:text-[--primary-dark]"
  >
    Link Text
  </ULink>
</template>
```
