---
title: Cheatsheet
description: Tailwind CSS Cheatsheet
navigation: false
lastModified: '2025-01-11'
---

## Typography

## Lists

### List Marker

```css
.nuxt-content ul {
  list-style-type: circle; /* or any other style */
}
```

```css
.custom-list {
  list-style-type: none; /* Remove default bullets */
}
.custom-list li::before {
  content: "→"; /* Use a custom marker */
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
```

```ts
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ul: {
              'list-style-type': 'square',
            },
            ol: {
              'list-style-type': 'lower-roman',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```



```css
/* global.css */
.prose {
  /* Your custom styles here */
  max-width: 65ch; /* Example: limit the width of prose content */
}

.prose ul {
  /* Custom styles for unordered lists within prose */
}

.prose ol {
  /* Custom styles for ordered lists within prose */
}


prose ul > li::before {
  content: url('~icons/material-symbols-light:arrow-right');
  margin-right: 0.5rem;
}
```
