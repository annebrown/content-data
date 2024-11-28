---
title: Setup
description: TailwindCSS Setup
---

## Tailwind CLI

```bash
pnpm i tailwindcss
npx tailwind init
```

### Config

Add paths to scan:

```ts
/* @@/tailwind.config.js */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
/* @@/tailwind.config.js */
```

## Add TW Directives to Project CSS

```css
/* @/assets/styles/fleet.css /*

...
@tailwind base;
@tailwind components;
@tailwind utilities;
...

/* @/assets/styles/fleet.css /*
```