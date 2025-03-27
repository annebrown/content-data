---
title: 'Raster to Vector'
description: 'Gradient-Edged Raster to Sharp Vector'
lastModified: '2025-03-15'
---

## Purpose

- Resolution-agnostic
- Dynamic CSS stroke, fill and opacity
- Preserve branding when original or comparable image text font is unavailable

## Trace Bitmap

Prioritize sharp edges:

- Brightness cutoff
- Edge detection

## Clean Up Paths

- Remove excess nodes, and smooth curves, using Node tool.

## Export to SVG

- Set Fill to black
- Set Stroke to none
- Export

## Optimize

Remove barnacles with `svgo` to reduce file size.
