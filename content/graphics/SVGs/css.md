---
title: 'CSS'
description: 'SVG CSS Styling'
lastModified: '2025-03-27'
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
