---
title: Styling
description: Nuxt CSS Styling
navigation: false
lastModified: '2025-04-05'
---



## Description

Styling Nuxt 3 with TailwindCSS 4

## Variables

Global CSS variables are defined in `app.config.ts` and `main.css`.

### app.config.ts

Customizations in `app.config.ts` are reactive, runtime updatable, support HMR, and can be invoked as TW classes:

```html
<UButton class="text-(--ui-primary)" label="Some String" />
```

>**SECURITY:** `app.config.ts` vars are exposed to the client bundle, so should not contain sensitive data.

### main.css

Theme vars defined in `main.css` are base styling tokens comprizing the app's visual foundation and can also be invoked as TW classes:

## @theme Directive

### Static

Use the `static` keyword for apps whose theme does not change between builds.

> **OPTIMIZATION:**
> `static` tells TW to evaluate theme vars at build time,instead of runtime.  This causes the build to use only optimized CSS with no TS computation, thus avoiding dynamic runtime processing.

```css
@theme static {
  --color-primary: 'blue';
}
```
