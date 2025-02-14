---
title: GitHub OAuth
description: Github Authn
lastModified: '2025-02-11'
---

## Description

Nuxt's [`nuxt-auth-utils`](../authn/nuxt-auth-utils.md) utility handles the entire GitHub OAuth flow.




## Login Page

Create login page, `pages/login.vue`:

```vue
<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
})
async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
  .then(async () => {
    await refreshSession()
    await navigateTo('/')
  })
  .catch(() => alert('Bad credentials'))
}
</script>

<template>
  <form @submit.prevent="login">
    <input v-model="credentials.email" type="email" placeholder="Email" />
    <input v-model="credentials.password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>
```

## Middleware

Create `middleware/authenticated.ts`:

```ts
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    return navigateTo('/login')
  }
})
```

## Protected Routes

Use middleware for authenticated routes, `@/pages/sensitive-route/index.vue`:

```vue
<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})

const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>

<template>
  <div>
    <h1>Welcome {{ user.name }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>
```
