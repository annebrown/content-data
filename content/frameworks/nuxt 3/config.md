---
title: Config
description: Nuxt Configuration
lastModified: '2025-01-08'
---

## package.json

### Dev Server

Config dev server IP addy and assign port number:

```json
{
    "name": "project-name",
    "private": true,
    "scripts": {
        "dev": "nuxt dev --host 192.168.5.555 --port 5555",
		...
    },
...
```

## nuxt.config.ts

### Modules

Module order matters.  This specific module order works as intended, without error or conflict:

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

### Telemetry

```js
telemetry: false, // F Telemetry
```

### Content

See [Nuxt/Content/config](/content/1.frameworks/nuxt/content/config.md).

### Styles

CSS:

```ts
css: ['@/assets/styles/fleet.css', '@/assets/styles/ship.css'],
```

Color Mode:

```ts
colorMode: {
    preference: 'dark', // $colorMode default
},
```

### Misc

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
