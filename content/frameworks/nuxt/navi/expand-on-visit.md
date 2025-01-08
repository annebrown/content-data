---
title: Expand On Visit
description: Expand Navi to Entry for Current Route
lastModified: '2025-01-08'
---

Collapsible navi tree to auto-expand to show current page's locan, on each new page render

Gets route and compares w navi items to deter which sections to expand

Collapsable `NavigationTree.vue`

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item._path">
      <div class="nav-item">
        <NuxtLink :to="item._path" :class="{ 'active': isActive(item._path) }">
          {{ item.title }}
        </NuxtLink>
        <button v-if="item.children" @click="toggleExpand(item)">
          {{ item.isExpanded ? '-' : '+' }}
        </button>
      </div>
      <NavigationTree
        v-if="item.children && item.isExpanded"
        :items="item.children"
        :current-path="currentPath"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  currentPath: {
    type: String,
    required: true
  }
})

const isActive = (path) => path === props.currentPath

const toggleExpand = (item) => {
  item.isExpanded = !item.isExpanded
}

watch(() => props.currentPath, () => {
  expandCurrentPath(props.items, props.currentPath)
}, { immediate: true })

const expandCurrentPath = (items, path) => {
  for (const item of items) {
    if (path.startsWith(item._path)) {
      item.isExpanded = true
      if (item.children) {
        expandCurrentPath(item.children, path)
      }
    } else {
      item.isExpanded = false
    }
  }
}
</script>
```

Navi Component

```vue
<script setup>
import { fetchContentNavigation } from '#imports'
import { useRoute } from 'vue-router'
import NavigationTree from './NavigationTree.vue'

const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(queryContent('/local'))
)

// Add isExpanded property to each item
const addExpandProperty = (items) => {
  return items.map(item => ({
    ...item,
    isExpanded: false,
    children: item.children ? addExpandProperty(item.children) : undefined
  }))
}

const navigationWithExpand = computed(() => {
  return navigation.value ? addExpandProperty(navigation.value) : []
})
</script>

<template>
  <div v-if="navigationWithExpand">
    <NavigationTree :items="navigationWithExpand" :current-path="route.path" />
  </div>
  <div v-else>
    Loading navigation...
  </div>
</template>
```

`expandCurrentPath` - recursively expand all parent items of current page
`watch` on `currentPath` - ensures this happens on every route changes
