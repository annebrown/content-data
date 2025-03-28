---
title: GH Authn
description: Login w GitHub
lastModified: '2025-03-25'
---

## Install nuxt-auth-utils

Install the `auth-utils` module:

```bash
npx nuxi module add auth-utils
```

## Register GH App

Under `developer` settings, add new OAuth app:

```text
App name:
Homepage URL: http://localhost:port
Authz callback URL: http://localhost:port/api/auth/github/callback
```

## Set Env Vars

Add session password and GH creds to `.env`:

```bash
# Required for session cookies
NUXT_SESSION_PASSWORD=rando-password-with-at-least-32-characters

# GitHub OAuth credentials
NUXT_OAUTH_GITHUB_CLIENT_ID=gh-provided-client-id
NUXT_OAUTH_GITHUB_CLIENT_SECRET=gh-provided-client-secret
```

## Simple Login Page

```vue

```<template>
    <div>
        <h1>Login with GitHub</h1>

        <a href="/api/auth/github">GitHub Authentication</a>

        <div v-if="loggedIn">
            <p>You are logged in!</p>
            <pre>{{ user }}</pre>
            <button @click="logout">Logout</button>
        </div>

    </div>
</template>

<script setup>
    const { loggedIn, user, clear } = useUserSession()

    async function logout() {
        await $fetch('/api/auth/logout', { method: 'POST' })
    clear()
}
</script>
```

## Callback Page

```vue
<template>
    <div>
        <h1>Authenticating...</h1>
    </div>
</template>

<script setup>
    const { loggedIn } = useUserSession()

    // Redirect to home page after successful login
    watchEffect(() => {
        if (loggedIn.value) {
            navigateTo('/')
        }
    })
</script>
```

## Endpoints

The `nuxt-auth-utils` module automatically adds these API endpoints:

`/api/auth/github` - redirects to GH for authn
`/api/auth/github/callback` - OAuth Callback
`/api/auth/logout` - clears the session and cookie

## Modify Catch-All Route

Configure `@/pages/[...slug].vue` to let the Nuxt API handles manage api endpoints, instead of trying to find the route in `@/content`:

```vue
<!--------@/pages/[...slug].vue------------------------------------------------>
<template><!-- No div - breaks route-->
    <NuxtLayout  v-if="!isApiRoute">
        <ContentRenderer :value="page" />
    </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute()

// Skip processing for API routes by using conditional rendering instead of return
const isApiRoute = route.path.startsWith('/api/')

// Only fetch content for non-API routes
const { data: page } = !isApiRoute
  ? await useAsyncData(route.path, () => queryContent(route.path).findOne())
  : { data: ref(null) }

// Only throw 404 for non-API routes that have no content
if (!isApiRoute && !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
</script>
<!--------@/pages/[...slug].vue------------------------------------------------>
```
