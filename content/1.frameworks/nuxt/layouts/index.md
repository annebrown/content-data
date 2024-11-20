---
title: Best Practices - Default
description: Best Practices for Default Layouts
---

## Best practices for `/content` Layout

`@/layouts/default`

```js
<template>
  <div class="layout-container">

      <ContentDoc v-slot="{ doc }">
        <article v-if="doc">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
        <template #not-found>
          <h1>Content not found</h1>
          <p>The requested content could not be found.</p>
        </template>
      </ContentDoc>


    <aside v-if="navigation">
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </aside>


</div></template>

<script setup>
import { useHead, useAsyncData, queryContent } from '#imports'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Nuxt Content Site` : 'My Nuxt Content Site'
  },
})

const { data: navigation } = await useAsyncData('navigation', () => 
  queryContent().where({ _path: { $contains: '/navigation' } }).findOne()
)
</script>

<style scoped>
.layout-container {
  display: grid;
  grid-template-areas: 
    "header header"
    "nav main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

aside { grid-area: nav; padding: 1rem; background-color: #f8f8f8; }

</style>
```
