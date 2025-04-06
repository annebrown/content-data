---
title: 'Dark-Mode'
description: 'Tone Considerations'
lastModified: '2025-04-06'
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
<!--------@/app/components/ship/Logo.vue--------------------------------------->
<template><div>

<!-- Logo -->
<NuxtLink to="/">
    <img
        :src="logoSrc"
        alt="Logo - Trees and water inside a circle, with text: Save the
                Grove Again"
        width="1479"
        height="419"
    />
</NuxtLink>

</div></template>

<script setup>
    import { computed } from 'vue'

    const colorMode = useColorMode()

    const logoSrc = computed(() =>
        colorMode.value === 'light' ? '/img/content/logo-rect-light.png' : '/img/content/logo-rect-dark.svg'
    )
</script>
<!--------@/app/components/ship/Logo.vue--------------------------------------->
```
