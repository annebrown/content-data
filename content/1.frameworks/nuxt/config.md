---
title: Config
description: Nuxt Configuration
---

## Modules

Module order matters.  Ask Nuxt Docs AI for useful deets.  Some of the AI-suggested orders are incorrect.  This specific module order works as intended, without error or conflict: 

```ts
    modules: [
    '@nuxt/ui',
    '@nuxt/content', 
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode',
    '@nuxt/image', 
    '@nuxtjs/mdc', 
    '@nuxt/icon',
    ],
```

## Telemetry

```js
export default defineNuxtConfig({
    telemetry: false, // F Telemetry
})
```

## Content

See [Nuxt/Content/config](/content/1.frameworks/nuxt/content/config.md).

## Color Mode

```ts
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
    },
```

## Misc

```ts

    devtools: { enabled: true },

    srcDir: 'app/',

    database: { // sqlite (non-persistent)
        default: {
          connector: 'sqlite',
          options: { name: 'db' }
        }
    },
      
    nitro: {
        prerender: {
          crawlLinks: true,
          failOnError: false,
        },
      },
    compatibilityDate: '2024-09-28',

    components: true,
        
  })
 ``` 
