---
title: Data To Component
description: Calling Component w Vars
lastModified: '2025-01-08'
---

## Define Prop in Child Component

```js
<!-- ChildComponent.vue -->
<script setup>
const props = defineProps(['myVar'])
</script>

<template>
  <div>{{ props.myVar }}</div>
</template>
```

## Pass Var to Child Component

```js
<!-- ParentComponent.vue -->
<script setup>
const myVar = ref('Hello from parent')
</script>

<template>
  <ChildComponent :myVar="myVar" />
</template>
```
