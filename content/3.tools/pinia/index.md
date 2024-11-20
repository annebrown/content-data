---
title: Pinia
description: Store Lib for Vue
---

## Installation

Install nuxi locally as a dev dep:

```bash
pnpm add -D nuxi
```

Then run nuxi module and add some-module:

```bash
pnpm run nuxi module add some-module
```

## Create a Store

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore( 'counter', {
    state: () => {
        return { count: 0}
    }

    // Could also be defined as state: () => ({ count: 0 })

    actions: {
        increment() {
            this.count++
        },
    }
})
```

## Use Store in a Component

```vue
<script setup>
import {useCounterStore } from '@/stores/counter'

const counter = useCounterStore ()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```

## Example

```js
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
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
        // call other getters with autocompletion ✨
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
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```