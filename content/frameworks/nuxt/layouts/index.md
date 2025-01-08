---
title: Layout
description: Nuxt Page Layout
navigation: false
lastModified: '2025-01-08'
---

## Layout Files

There are many ways to affect layout in a Nuxt app.

## app.vue

`@/app.vue` is the central entry point for a Nuxt app, and is the wrapper for all other layouts and pages.

It renders content for every route, defines global UI elements, such as navi, header and footer, and provides structure for the entire Nuxt app.

### @/layouts Directory

The `@/layouts` dir can host a default layout file, plus, named layouts.

### @/layouts/default.vue

`@/layouts/default.vue` provides the structure for all pages not represented by named layouts, including @Nuxt/Content module's `@/contents`.

### @/layouts/named-layout.vue

Named layouts override `@/layouts/default.vue`, and can be specified using either a compiler macro (`definePageMeta`), or by using the `<NuxtLayout>` component, in `@/app.vue` and any `.vue` file in the`@/pages` subtree, including , `@/pages/[<path>]/[slug].vue`.

#### definePageMeta

This approach is less concise, moves the name away from where it is invoked, and doesn't allow for dynamic layout names, as supported by `<NuxtLayout>` (`definePageMeta is a compiler macro).  However it is it is the <em>recommended</em> way to specify static layouts.

`definePageMeta` is processed at compile time (better performance), and avoids hydration mismatches, which is a consideration when using dynamic layouts.

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
```

### <NuxtLayout>

While not the recommended approach, the `<NuxtLayout>` component can be used in a template to specify named layouts, where dynamic layouts are required.

Server-side layouts must be defined before layout rendering, requiring route middleware to avoid hydration mismatch.

### [slug].vue and [...slug].vue

`[...slug].vue` is a catch-all route, while `[slug].vue` privides more more specificity.  `[slug].vue` delivers dynamic routing and page layout for sibling pages in a sub-dir of the `@/pages` subtree.   While `[slug].vue` matches a single node of a routing tree, `[...slug].vue` matches sibling nodes, plus all other routes in the subtree.  It provides for multiple dynamic route segments, including nested dynamic routes.
