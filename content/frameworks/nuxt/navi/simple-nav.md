---
title: Simple Nav
description: Simple Nav Passed Btw Components
lastModified: '2025-01-08'
---

```js
<script setup>
const dirNode = '/books/javascript'
const pathRegexp = '^/books/javascript'

const { data: dragonBooks } = await useAsyncData('javascriptBooks', () =>
  queryContent(dirNode)
    .where({ _path: { $regex: pathRegexp } })
    .find()
)
</script>

<template>
  <div>
    <slot :javascript-books="javascriptBooks"></slot>
  </div>
</template>
In the parent component:

<template>
  <ChildComponent v-slot="{ javascriptBooks }">
    <h2>Dragon Books</h2>
    <ul v-if="javascriptBooks">
      <li v-for="book in javascriptBooks" :key="book._path">
        {{ book.title }}
      </li>
    </ul>
  </ChildComponent>
</template>
```

- Child component fetchs list of books
- Instead of emitting event, child uses scoped slot to pass data to parent
- Parent uses v-slot to receive data from child
