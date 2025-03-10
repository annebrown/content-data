---
title: 'CSS'
description: 'SVG CSS Styling'
lastModified: '2025-03-06'
---

## Description

When an SVG image's raw code (`XML`) is embedded in a component or template, it becomes a special DOM element, whose objects are available for CSS styling via `ID` or `class` selector.

## Selectors

### ID

Inkscape V1.4 objects have an `ID` property field in their `Object Properties` panel.

## Class

To add a class selector to an SVG object:

- Select SVG object
- Open `Object Properties` and select `+` in bottom, left of panel (`Add a new CSS Selector`).
- Enter `.some-class-name` when prompted for `CSS Selector`

## CSS Attributes

Common SVG attributes used to style SVGs include:

- `fill` and `stroke`
- `stroke-width`, `stroke-linecap` and `stroke-linejoin`
- `opacity`, `fill-opacity` and `stroke-opacity`
- `font-family`, `font-size` and `font-weight`

## Data store

SVGs must be inlined in HTML ('.html', template, component etc.) in order to style its objects using its `class` or `id` selectors.

Any edits to the svg must also be

- Store and edit in `components/img/Logo.vue`, Nuxt 3 component

## Console Errors

### Failed to resolve component: sodipodi:namedview

```Error
Failed to resolve component: sodipodi:namedview
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
```

Config `nuxt.config.ts` to exclude `sodipodi` element from component resolution:

```ts
    vue: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sodipodi:'),
        },
    },
```

### Uncaught InvalidCharacterError

```Error
Uncaught (in promise) InvalidCharacterError: Failed to execute 'createElement' on 'Document': The tag name provided ('/_nuxt/assets/images/logo.svg') is not a valid name.
```
