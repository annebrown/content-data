---
title: Env Vars
description: Nuxt Environment Variables
---

Nuxt is built with [vite](https://vite.dev/).  See [Vite Env Var Handling](/content/2.tech/3.tools/vite/) for info regarding security, specificity, escaping special chars, etc.

## Categories

`.env.local` - local dev

## Config

Place env vars in `@@/.env`.

### Runtime

To make env vars accessible at runtime,  define in `nuxt.config.ts`:

```json
export default defineNuxtConfig({
    runtimeConfig: {
        // Priv - Secrets, dB connection strings, etc.
        aPrivateEnvVar : 'sensitive data', // Overrides NUXT_A_PRIV_ENV_VAR
        public: {
            someEnvVar: process.env.SOME_ENV_VAR, // default
            someOthEnvVar: process.env.VITE_SOME_ENV_VAR,  //default
            someEnvVar: 'some data', //override default,
            someOthEnvVar: process.env.VITE_SOME_ENV_VAR || 'some other data',
            
        },
    },  
})
```

Env vars specified as `public` are avail to server-side code.  To make accessible to client-side code, prefix with `VITE_`.  

## Access

Only env vars prefixed with `VITE_` are available to server and client-side code.

### Components

```html
<template>
<p>Some Env Var: {{ $config.public.VITE_SOME_ENV_VAR }}</p>
</template>
```
### Server Code

From `@/server/api/some-script.ts`:

```ts
export default defineEventHandler(async (event) => {
  const someEnvVar = process.env.VITE_SOME_ENV_VAR;
  return `Some Env Var: ${someEnvVar}`;
});
```



