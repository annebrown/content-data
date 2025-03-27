---
title: Pinia
description: Store Lib for Vue
navigation: false
lastModified: '2025-03-27'
---

## Description

## Install

```bash
pnpm i pinia
```

## Create Stores

```ts
//--------@/stores/subtractor.ts----------------------------------------------->
// Returns Numeric value and function
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSubtractorStore = defineStore('subtractor', () => {
  const subtractor = ref(0)

  function subtract() {
    subtractor.value--
  }

  return { subtractor, subtract }
})
//--------@/stores/subtractor.ts----------------------------------------------->
```

and

```ts
//--------@/stores/alerts.ts--------------------------------------------------->
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
  const alerts = ref([])

  function addAlert(message) {
    alerts.value.push(message)
  }

  function clearAlerts() {
    alerts.value = []
  }

  return { alerts, addAlert, clearAlerts }
})
//--------@/stores/alerts.ts--------------------------------------------------->
```

## Import Stores

Configure `nuxt.config.ts` to import all stores:

```ts
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    // other modules
  ],
  imports: {
    dirs: ['stores'], // This enables auto-imports from the stores directory
  }
})
```

## Use Store in a Component

```vue
<!--------@/app/components/meta/RandoComponent.vue----------------------------->
<template><div>

    <h2>App Stores</p>

    <h2>Subtractor</h2>

    <!-- Render Numeric Value -->
    <p>Subtractor value: {{ subtracterStore.subtractor }}</p>

    <!-- Modify Numeric Value -->
    <button @click="subtracterStore.subtract">Subtract</button>

    <h2>Alerts</h2>

    <!-- Clear Alerts -->
    <button @click="alertsStore.clearAlerts">Jettison Alerts</button>

    <!-- Display Alerts-->
    <ul v-if="alertsStore.alerts.length">
        <li v-for="(alert, index) in alertsStore.alerts" :key="index">
            {{ alert }}
        </li>
    </ul>
    <p v-else>No wave, no wake.</p>

</div></template>

<script setup>
    const alertsStore = useAlertsStore()
    const subtracterStore = useSubtracterStore()
</script>
<!--------@/app/components/meta/RandoComponent.vue----------------------------->
```

## Example

```js
{% raw %}
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // an directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
{% endraw %}
```

> These docs are sourced from a headless, framework-agnostic repo.  Do not copy the `raw` tags, as they are only present to escape special characters ('$', curly braces, etc.) used in 'Liquid' syntax processing for Jekyll SSG implementations.
