---
title: Routes
description: Protected Routes
lastModified: '2025-03-23'
---

## Description

Authn protection for content routes

## Route Rules

Add route rules `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    routeRules: {
        '/api/**': {
            ssr: true,
            prerender: false
        }
    }
})
```

## Client-Side

Add client-side middleware to check authn before rendering content:

```ts
//--------@/app/middleware/auth.ts--------------------------------------------->
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn } = useUserSession()

    // redirect the user to the login screen if they're not authenticated
    if (!loggedIn.value) {
        return navigateTo('/login')
    }
})
//--------@/app/middleware/auth.ts--------------------------------------------->
```

## Server-Side

Add server-side checks in API handlers, to prevent access to content, even if client-side checks fail.

```ts

```
