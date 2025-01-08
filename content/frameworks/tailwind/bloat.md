---
title: Bloat
description: Tailwind Bloat
lastModified: '2025-01-08'
---

## Description

On page Inspection, it is evident that Tailwind CSS adds an enormous amount of styling bloat, (including code for unused and overridden styles)  to rendered pages,  in development AND production.

This is because Tailwind generates a massive stylesheet with all possible utility classes, and complies the entire thing without any tree-shaking.  This makes troubleshooting styles more cumbersome, slows development and increases payload.

## Purge

Configure Tailwind to analyze production builds and include only the necessary styling.

```ts
// tailwind.config.js
module.exports = {
  purge: { // Tree-shake styling on production
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  // ...rest of your Tailwind config
};
```
