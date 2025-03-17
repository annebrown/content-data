---
title: OAuth
description: Nuxt OAuth Authn
lastModified: '2025-02-23'
---

## Overview

The `nuxt-auth-utils` module uses secured, sealed cookies to store session data, so no dB is rqd

## Install Modules

Install `nuxt-auth-utils` and `zod` as a deps:

```bash
pnpm dlx nuxi module add nuxt-auth-utils zod
```

## Session Cookie

Add session password to `@/.env`:

```properties
NUXT_SESSION_PASSWORD=a-random-password-with-at-least-32-characters
```

## Login API Route

To accept POST requests at the `/api/login` route, create `@/server/api/login.post.ts`:

```ts
import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  if (email === 'admin@admin.com' && password === 'iamtheadmin') {
    await setUserSession(event, {
      user: {
        name: 'John Doe'
      }
    })
    return {}
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials'
  })
})
```

This API route has embedded credentials.

## Login Page

Create a login page `@/pages/login` for the `login` API route:

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
    // Refresh the session on client-side and redirect to the home page
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

## Protect Routes

To protect a route `/sensitive`, create `@/server/api/user/sensitive.get.ts`:

```ts
export default defineEventHandler(async (event) => {

  const { user } = await requireUserSession(event)

  return {}
});
```

## Protect Content

Create `@/middleware/authenticated.ts` to determine whether user is logged in:

```ts
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()

  // redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value) {
    return navigateTo('/login')
  }
})

```

To apply the middleware to sensitive content, use `definePageMeta`:

```vue
<script setup lang="ts">
    definePageMeta({
    middleware: ['authenticated'],
})
</script>

<template>
    <!-- Sensitive Content -->
</template>
```
