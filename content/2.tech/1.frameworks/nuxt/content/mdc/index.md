---
title: MDC
description: Accessing Components from MDC Files
---

## Syntax

Syntax for using `MyComponent` in MDC:

```markdown
::my-component
Content goes here
::
```

Component must be global or in '/content'

## Passing Props

### Inline

   ```markdown
   ::alert{type="warning" icon="exclamation-circle"}
   Oops! An error occurred
   ::
   ```

### Yaml


   ```
   ::icon-card
   ---
   icon: IconNuxt
   description: Harness the full power of Nuxt and the Nuxt ecosystem.
   title: Nuxt Architecture.
   ---
   ::
   ```
   [Nuxt Content - Props](https://content.nuxt.com/usage/markdown/#props)

## Nested Components

   ```
   ::hero
     :::card
       A nested card
       ::card
         A super nested card
       ::
     :::
   ::
   ```
