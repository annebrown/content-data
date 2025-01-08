---
title: Persist Navi Tree
description: Maintain Navi Tree State
lastModified: '2025-01-08'
---

## Problem

On first load, default layout `/layouts/default.vue` invokes `NaviNavigation.vue` to render expandable navigation tree.  On navigation to another route in the tree, page is displayed but content for navi tree element disappears.

## Requirement

Persists navi tree state (with exact expanded and collapsed subtrees) across route changes.

## Solution

### useState Composable

Manage navi state - `@/composables/useNavigationState.ts`:

```vue
import { useState } from '#app'

export const useNavigationState = () => useState('navigation', () => ({
  expandedItems: [] as string[]
}))
```

Modify your NaviNavigation.vue component to use this state:

```vue
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const expandedItems = useState('expandedItems', () => new Set())
const route = useRoute()

const organizedNavigation = computed(() => {
  if (!navigation.value) return []

  const items = [...navigation.value]
  const index = items.find(item => item._path === '/index' || item._path === '/')

  if (index) {
    const indexIndex = items.indexOf(index)
    items.splice(indexIndex, 1)

    // Make the index item expandable and contain all other items
    index.children = items
    return [index]
  }

  return items
})

const uniqueRoutes = new Set()

const filterDuplicateRoutes = (items) => {
  return items.filter(item => {
    if (uniqueRoutes.has(item._path)) {
      return false
    }
    uniqueRoutes.add(item._path)
    if (item.children) {
      item.children = filterDuplicateRoutes(item.children)
    }
    return true
  })
}

const filteredNavigation = computed(() => filterDuplicateRoutes(organizedNavigation.value))

// Function to expand all parent items of the current route
const expandCurrentRoute = (items, path) => {
  for (const item of items) {
    if (path.startsWith(item._path)) {
      expandedItems.value.add(item._path)
      if (item.children) {
        expandCurrentRoute(item.children, path)
      }
    }
  }
}

// Watch for route changes and expand the current route
watch(() => route.path, (newPath) => {
  expandCurrentRoute(filteredNavigation.value, newPath)
}, { immediate: true })
</script>

<template>
  <nav class="text-xs pb-2">
    <ul class="navigation-tree">
      <NaviNavigationItem
        v-for="item in filteredNavigation"
        :key="item._path"
        :item="item"
        :depth="0"
        :expanded-items="expandedItems"
      />
    </ul>
  </nav>
</template>

<style scoped>
.navigation-tree {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
```
