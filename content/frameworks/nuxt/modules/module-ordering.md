---
title: Module Order
description: Nuxt Module Execution Order
lastModified: '2025-01-08'
---

## Description

Because modules are executed sequentially, order in `nuxt.config.ts` affects loading priority and module interaction.

## Module Loading Order

```ts
modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/mdc',
        '@nuxtjs/color-mode',
        '@nuxt/image',
        '@nuxt/content',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
]
```

The tailwind module, `@nuxtjs/tailwindcss`, followed by `@nuxtjs/color-mode`, should be loaded early and before any other modules that depend on themeing and styling.

Load `@nuxt/image` b4 content-related modules, to ensure the availabitity of image processing.

Load `@nuxt/content`, followed by `@nuxtjs/mdc` so that @nuxt/content is registered b4 @nuxt/ui, otherwise Tailwind CSS classes won't be parsed in `.md` and `.yml`.

`@nuxtjs/google-fonts` is less likely to be a dep for other modules.

Place `@nuxt/icon` b4 `@nuxt/ui` if UI components use icons.

`@nuxt/ui` must preceed `@nuxtjs/tailwindcss` to avoid this error:

```bash
ERROR  Pre-transform error: Failed to resolve import "#tailwind-config/theme/colors" from "node_modules/.pnpm/@nuxt+ui
```
