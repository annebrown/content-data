---
title: Images
description: HTML Images
navigation: false
lastModification: 2025-01-22
---


## SEO

Use descriptive text for media filenames and 'alt'.

## A11y

Use `alt` attrib for screen readers, and for user hints when media doesn't load as expected.

Use  CSS `background-image` property for decorative images that don't provide meaningful context.

## Aspect

For multi-aspect ratios at a size or with no size, ratio resulting in the largest area is used.
If multiple sizes for the largest area, widest is selected.

## Natural Dims

- Raster - w, h and aspect ratio
- SVG - w and h
- ICO - largest size, or closest aspect to the default

## Computed

### Object Size Negotiation

- Algo for size and position selection
- Priority - Coded dims, then natural dims , then default (aspect covering largest area within container) dims
- Missing Dim - Largest area w natural aspect.

## Targets

Resolution: 1200-1600 pixels

Size: 100-300, 500 (for best quality detailed imgs) KiB
