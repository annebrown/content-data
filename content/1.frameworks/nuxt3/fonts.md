---
title: Fonts
description: Nuxt Fonts Config
lastModified: '2025-04-06'
---

## Description

Configure fonts for global use in a Nuxt 3 app, using Tailwind 4, [@nuxt/ui 3](./modules/ui3/index.md), and [@nuxt/fonts](./modules/fonts/index.md).

## Fonts Provider

To configure fronts provider, see [@nuxt/fonts module](./modules/fonts/index.md)

## Global Variables

Define custom font variables in main css file:

```css
@import "tailwindcss";
@import "@nuxt/ui";
/* Other Imports */

@theme static {
  --font-custom-name: 'Font Family Name', sans-serif;
  /* Other Variables */
}
```

## @nuxt/ui 3

To configure and use fonts for @nuxt/ui 3 components, see [@Nuxt/UI Config](./modules/ui3/config.md/).

## Usage

### Components

```vue
<template>
    <div>
        <h2>Font-family: Custom Name</h2>

        <p class="font-custom-name">
            abcdefghijklmnopqrstuvwxyz<br/>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            1234567890<br/>
            Sphinx of black quartz, judge my vow.
        </p>

    </div>
</template>
```

### Markdown

#### Prose Component

For Nuxt/Content apps, use Prose components to configure the typology foundation.

```vue [/components/content/ProseH1.vue]
<!--------@/components/content/ProseH1.vue------------------------------------->
<template>
    <h1 class="font-custom-name">
      <slot />
    </h1>
  </template>
<!--------@/components/content/ProseH1.vue------------------------------------->
```

#### Inline HTML

Font-family can be defined for GH-flavored MD and for apps using the Nuxt/Content module:

```md
<div style="font-family: var(--font-custom-name);">
This text uses the Custom Name font that was configured as --font-custom-name.
</div>
This text uses default font.
```

#### MDC

Markdown Component syntax is supported for apps using the Nuxt/Content module:

```md
---
title: 'Nuxt/Content MDC Syntax'
Description: 'Use MD components in Nuxt/Content MD Files'
---

## Font-Family: Custom Name
::div{style="font-family: 'Custom Name', sans-serif;"}
This text uses the Custom Name font that was configured as --font-custom-name.
::

This text uses default font.
```

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

TODO: Testing

- Q1: Can MD support MD codeblocks?
- Q2: Does MDC syntax also support use of TW class attrib in place of style?

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#### Custom Vue Component

See Config?
