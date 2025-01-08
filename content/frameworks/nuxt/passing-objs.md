---
title: Passing Objects
description: Passing Objects in Nuxt
lastModified: '2025-01-08'
---

## Managing Shared State

```js
// composables/useSharedState.ts
export const useSharedState = () => useState('sharedObject', () => ({
  // Initial obj props
}))
```

Use in any component requiring access to the shared object:

```js
<script setup>
const sharedObject = useSharedState()
</script>
```

## Update the state

```js
<script setup>
const sharedObject = useSharedState()

function updateObject() {
  sharedObject.value = { ...sharedObject.value, newProperty: 'New Value' }
}
</script>
```

- State remains reactive across components
- Changes are reflected wherever the state is used
- In Nuxt and Vue, use composables and state management to share data between components.

## Using Object Between Components

- Use props to pass data from parent to child
- Use emits to send data back from the child to the parent
- Doesn't use global state mgmt

### Parent Component Use Props

```js
<template>
  <ChildComponent :props="props" @method="signUp"/>
</template>

<script setup>
const props = {
  fields: [
    "email",
    "password",
    "confirm",
  ],
  header: "Register a new account",
  button: [
    {
      text: "Sign Up",
      color: "green-500",
    }
  ]
};

function signUp(email) {
  console.log(email)
}
</script>
```

In the child component (ChildComponent.vue):

```js
<script setup>
const { props } = defineProps(['props']);
</script>
```

## Data from Child to Parent w Emits

Child component:

```js
<script setup>
const emit = defineEmits(['method']);

function sendDataToParent(data) {
  emit('method', data);
}
</script>
```

The child component can now call sendDataToParent with the data it wants to send to the parent.

## Receiving emitted data in the parent

Parent component can receive data in the method it passed to the child:

```js
<script setup>
function signUp(email) {
  console.log(email)
}
</script>
```

- Passing obs between parent and child wo global state mgmt
- Parent can send data to child via props
- Props in Vue 3 and Nuxt 3 are one-way down
- For two-way binding, use v-model or implement a custom two-way binding using props and emits.
