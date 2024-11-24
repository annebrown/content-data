---
title: Components
description: Syntax for Using a Nuxt Component in MDC
---

::card
---
title: My Card Title
---
This is the content of my card. You can use **Markdown** here!

- List item 1
- List item 2
::

More Markdown content after the card.

Accessing Components from MDC Files
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
