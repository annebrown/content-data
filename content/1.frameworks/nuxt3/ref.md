---
title: Ref()
description: Ref() Function
lastModified: '2025-01-28'
---

## Description

- Used to make primitive vals reactive
- Auto-imported

## Usage

```vue
<script setup>
const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
