---
title: v-if
description: Using v-if in Nuxt
---

## Purpose

Conditional rendering in Vue and Nuxt

```js
<template>
  <div>
    <h1>Welcome to my app</h1>
    <p v-if="isLoggedIn">Hello, {{ username }}!</p>
    <p v-else>Please log in to continue.</p>

    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </div>
</template>

<script setup>
const isLoggedIn = ref(false)
const username = ref('')

const login = () => {
  isLoggedIn.value = true
  username.value = 'John Doe'
}

const logout = () => {
  isLoggedIn.value = false
  username.value = ''
}
</script>
```

Uses `v-if="isLoggedIn"` to conditionally render a welcome message when user is logged in.

