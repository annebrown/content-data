---
title: Components
description: Components
navigation: false
lastModified: '2025-02-12'
---

## Markdown Usage

Components located in `@/components/content` or `@@/base/components/content`, or in additionally configured sources, can be used in markdown content:

```markdown
# Title

## Some Data

<SomeComponent />

```

or

```markdown
# Title

## Some Data

::SomeComponent
::

```

or

```markdown
# Title

## Some Data

::SomeComponent
Some content
::

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
