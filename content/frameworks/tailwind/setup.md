---
title: Setup
description: TailwindCSS Setup
lastModified: '2025-01-08'
---

## Tailwind CLI

```bash
pnpm i tailwindcss
npx tailwind init
```

### Config

Add paths to scan:

```ts
/*--------@@/tailwind.config.js--------*/
module.exports = {
  content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './public/**/*.html',
      './app/**/*.{js,jsx,ts,tsx,vue}',
           ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/*--------@@/tailwind.config.js--------*/
```

## Add Tailwind Directives

```css
/*--------@/assets/styles/fleet.css--------*/
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import "fleet-code.css";
@import "fleet-links.css";
@import "fleet-typography.css";
@import "fleet-ui.css";
/*--------@/assets/styles/fleet.css--------*/
```
