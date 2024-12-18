---
title: NuxtUI
description: NuxtUI Module

---

## Description

@nuxt/ui is a Nuxt Module providing customizable Headless UI components based on [Headless UI](https://headlessui.com/) and Tailwind CSS.

## Installation

```bash
pnpm i @nuxt/ui
```

## Usage

@Nuxt/ui components are configured in `@@/app.config.ts`:

```ts
export default defineAppConfig({
    ui: {
        strategy: 'override',
        button: {
            color: {
                primary: {
                    solid: 'bg-[--primary-light] dark:bg-[--primary-dark]'
                }
            }
        }
    }
})
```

Individual components are styled using the `ui` prop:

```vue
<template>
    <UContainer :ui="{ constrained: 'max-w-2xl' }">
        <slot />
    </UContainer>
</template>
```

## Defaults

Defaults are overridden in `@@/app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    button: {
      default: {
        size: 'md',
        color: 'gray',
        variant: 'ghost'
      }
    }
  }
})
```

## Groups

```vue
  <UButtonGroup size="sm" orientation="horizontal" color="primaery-dark">
    <UButton label={{ item.title }} />
    <UButton icon="i-solar-eye-linear" />
  </UButtonGroup>
```
