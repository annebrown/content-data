---
title: Components
description: Components
navigation: false
lastModified: '2025-02-03'
---

## Markdown Usage

Components located in `@/components/content` or `@@/base/components/content`, can be used in markdown content:

```markdown
# Title

## Some Data

<SomeComponent />

```

For more flexible component organization, register them [globally](global) or use a [wrapper component](#wrapper-component).

@Nuxt/content will only recognize a single component per markdown file, with additional components being ignored.

## Global

Register components globally in `nuxt.config` to use them in vue templates and markdown `/content`:

```ts
export default defineNuxtConfig({
  // ...
  components: {
    global: true, // Register components globally
    dirs: [
      '~/components',
      // ...
    ],
  },
});
```
