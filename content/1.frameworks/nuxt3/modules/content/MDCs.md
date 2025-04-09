---
title: MDCs
description: MD Extension for Embedded Vue Components
navigation: false
lastModified: '2025-04-08'
---

## Description

@nuxt/content's MD Components use a syntax extension for Markdown that allows Vue components to be embedded in MD documents, including codeblocks.

> Note: @Nuxt/content will only recognize a single component per markdown file, with additional components being ignored.

## Markdown Usage

Components located in `@/components/content`, can be used in markdown content:

## Vue Syntax

```markdown
# Title

## Some Data

<SomeComponent />

```

## MDC Syntax

```markdown
# Title

## Some Data

::SomeComponent
::

```

## Slots

```markdown
# Title

## Some Data

::SomeComponent
Some content
::

```

## Codeblock Embedded

::SeeMore

```bash
pnpm i @nuxt/content
```

::

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
