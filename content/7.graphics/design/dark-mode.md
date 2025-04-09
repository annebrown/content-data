---
title: 'Dark-Mode'
description: 'Tone Considerations'
lastModified: '2025-04-07'
---

## Description

Images that are visibly jarring in dark-mode, either need to be luminance adjusted, or substituted with a dark-mode version.

## SVG Compute

For simple SVGs, the color can be preserved, while flipping the white and black:

```vue
<img src="/img/logos/logo.svg" class="dark:invert dark:hue-rotate-180" />
```

Using a single file instead of two, reduces initial page load size.  It also reduces asset count for maint, loading and caching.

## Color Mode Component

If vector images are not an option, a brightness mode component can be used to select an image based on light or dark state, for example:

```vue
<!--------@/components/ship/ColorMode.vue-------------------------------------->
<template>
  <ClientOnly>
    <UButton
        class="h-fit mr-1 ml-0 pl-0"
        :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
        variant="link"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="isDark = !isDark"
        :ui="{
            leadingIcon: 'text-(--ui-text) size-8 align-bottom'
         }"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<!--------@/components/ship/ColorMode.vue-------------------------------------->

```
