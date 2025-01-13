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

A monorepo containing common assets, plus similarly focused apps that require a common, centralized code base:

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

## Extends Property

The `extends` property in a project's `nuxt.config.ts` allows the project's code to be extended to include the common assets:

```ts
export default defineNuxtConfig({
  extends: [

    // Extend all shared assets in co-located monorepo
    '../../base',

    // Extend all assets in a GitHub private repo, using token, env var, authn
    ['github:annebrown/base-priv', { auth: process.env.GITHUB_TOKEN }]

  ]
})
```

## Reusing Components

Ex, Code required in a Nuxt component to reuse a component `@/base/components/fleet/navi/Toc.vue` from the shared base:

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
