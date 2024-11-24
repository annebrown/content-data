---
title: Troubleshooting
description: Troubleshooting Nuxt/Content
---

## Display Page Meta

```<template>
  <div>
    <h1>Debug Information</h1>
    <p>Path: {{ path }}</p>
    <p>Page data: {{ page }}</p>
    <article v-if="page">
      <h2>{{ page.title || 'No Title' }}</h2>
      <p v-if="page.description">{{ page.description }}</p>
      <ContentRenderer v-if="page.body" :value="page" />
      <p v-else>No body content available.</p>
    </article>
    <p v-else>No page data found.</p>
  </div>
</template>

<script setup>
const route = useRoute()
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () => 
  queryContent(path).findOne()
)
</script>```