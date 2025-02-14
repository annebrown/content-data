---
title: Typography
description: Typography plugin
navigation: false
lastModified: '2025-01-11'
---

## Install

```bash
pnpm i @tailwind/typography
```

## Configure

`tailwind.config.ts`:

```ts
import tailwindTypography from '@tailwindcss/typography'

export default {
  plugins: [tailwindTypography()]
}
```

## Element Modifiers

See [Element Modifiers](https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers) for a complete list of Tailwind Typography `prose` modifiers.

## Usage

Using  Tailwind's `prose` classes in HTML:

```html
<div class="prose prose-sm prose-ul- :rounded-xl prose-headings:underline prose-a:text-blue-600">
  {{ markdown }}
</div
```

CSS:

```css
.prose {
  /* Your custom styles here */
  max-width: 65ch; /* Example: limit the width of prose content */
}

.prose ul {
  /* Custom styles for unordered lists within prose */
}

prose ul > li::before {
  content: url('~icons/material-symbols-light:arrow-right');
  margin-right: 0.5rem;
}
```
