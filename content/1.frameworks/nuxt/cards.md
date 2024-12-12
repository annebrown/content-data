---
title: Cards
description: Using Cards and Data
---

## Render card elements for each item of card data:

```vue
<template>
  <UPageGrid>
    <UCard v-for="(module, index) in modules" :key="index">
      <template #header>
      <h3>{{ module.title }}</h3>
      </template>
      <p>{{ module.description }}</p>
    </UCard>
  </UPageGrid>
</template>

<script setup lang="ts">
const modules = [{
  title: 'VueUse',
  description: 'Collection of essential Vue Composition Utilities for Vue 2 and 3.',
}, {
  title: 'ESLint',
  description: 'ESLint module for Nuxt.',
}, {
  title: 'Tailwind CSS',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
}]
</script>
```

- Source: Adapted from the [PageGrid documentation](https://ui.nuxt.com/pro/components/page-grid) 
- `UCard`
- `UPageGrid`

## Using data from a json file:

`cardData.js`

```ts
// cardData.js
export const cards = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' }
]
```

Import and Use Card Data:

```Vue
<template>
  <div>
    <UCard v-for="(card, index) in cards" :key="index">
      <template #header>
        <h3>{{ card.title }}</h3>
      </template>
      <p>{{ card.description }}</p>
    </UCard>
  </div>
</template>

<script setup>
import { cards } from './cardData.js'
</script>
```

## Using a Component for Card Data:

`CardData` component:

```vue
<script setup>
const cards = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' }
]

defineExpose({ cards })
</script>
```

Access Data from CardData:

```vue
<template>
  <div>
    <UCard v-for="(card, index) in cardData.cards" :key="index">
      <template #header>
        <h3>{{ card.title }}</h3>
      </template>
      <p>{{ card.description }}</p>
    </UCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardData from './CardData.vue'

const cardData = ref(null)
</script>

<template>
  <CardData ref="cardData" />
</template>
```
