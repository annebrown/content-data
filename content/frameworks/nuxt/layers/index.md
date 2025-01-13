---
title: Layers
description: Shared Code
navigation: false
lastModified: '2025-01-13'
---

## Description

Layers is a Nuxt feature allowing common code to be shared among projects.

Common code can be co-located with apps in monorepos, accessed via installed npm pkgs, and imported from GitHub repos.

## Monorepo

A monorepo contains common assets, plus similarly focused apps that require a common, centralized code base.  This approach would have a structure like:

```
nuxt/
├── base/
│   ├── nuxt.config.ts
│   └── assets/
│       └── css/
│           └── fleet.css
├── apps/
│   ├── app1/
│   │     └── assets/
│   │           └── css/
│   │                 └── ship.css
│   ├── app2/
│   └── ...
└── nuxt.config.ts
```

## Base Config

Config `@@/base/nuxt.config.ts` to specify assets to be shared amongst monorepo apps.

Ex, Make `@/base/assets/css/fleet.css` accessable to all monorepo apps:

```ts
//<--------@@/base/nuxt.config.ts---------------------------------------------->
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Relative paths in Layer are resolved relative to the app, not the Layer
const currentDir = dirname(fileURLToPath(import.meta.url))

// Make @/base/assets/css/fleet.css available for reuse
export default defineNuxtConfig({
  css: [
    join(currentDir, './assets/css/fleet.css')
  ]
})
//<--------@@/base/nuxt.config.ts---------------------------------------------->
```

## Extends Property

The `extends` property in a project's `nuxt.config.ts` allows the project's code to be extended to include common monorepo assets, as well as code from installed npm pkgs and GitHub repos:

```ts
//<--------@@/apps/app1/nuxt.config.ts----------------------------------------->
export default defineNuxtConfig({

    ...

    extends: [

        // Extend all shared assets in co-located monorepo
        '../../base',

        // Extend assets located in a public GitHub repo
        ['github:annebrown/base-pub', { auth: process.env.GITHUB_TOKEN }]

        // GitHub private repo, using token, env var, authn
        ['github:annebrown/base-priv', { auth: process.env.GITHUB_TOKEN }]

    ],

    ...

})

...

//<--------@@/apps/app1/nuxt.config.ts----------------------------------------->
```

## Reusing Components

Nuxt component syntax rqd to reuse component `@/base/components/fleet/navi/Toc.vue` from the shared base:

```vue
<FleetNaviToc />
```

## Shared Assets

The following list of assets in the common code base are automatically scanned by Nuxt for use in apps extending this base layer:

- `nuxt.config.ts`
- `app.config.ts`
- `components`
- `composables`
- `layouts`
- `pages`
- `plugins`
- `server`
- `utils`
