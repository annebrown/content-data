---
title: Env Vars
description: Nuxt Environment Variables
lastModified: '2025-01-08'
---

## Config File

To make env vars accessible to `nuxt.config.ts`, place them in `@@/.env`.

Vite uses the [dotenv](https://github.com/motdotla/dotenv) Node module, to load vars from `.env`, at dev build time.

## Config

Add `.env` to `.gitignore`.

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

## Usage

Restart server to collect the latest env var config.

Only env vars prefixed with `VITE_` are available to server and client-side code.

Loaded variables are exposed to Vite-processed **client** source code, using the `import.meta.env` object, as strings, including numbers and booleans.

### Components

```html
<template>
<p>Some Env Var: {{ $config.public.VITE_SOME_ENV_VAR }}</p>
</template>
```
### API

From `@/server/api/some-script.ts`:

```ts
export default defineEventHandler(async (event) => {
  const someEnvVar = process.env.VITE_SOME_ENV_VAR;
  return `Some Env Var: ${someEnvVar}`;
});
```

## Escaping

Escape `$`  (dollar sign) with `/` (forward slash).

## Priority

Vars that exist prior to Vite (build) execution have highest priority and will not be overridden by `.env` files.

Specificity takes precedence over generic.  `.env.production` is higher priority then `.env`.
