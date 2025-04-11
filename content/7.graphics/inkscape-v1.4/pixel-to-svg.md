---
title: 'Raster to Vector'
description: 'Gradient-Edged Raster to Sharp Vector'
lastModified: '2025-04-10'
---

## Description

Creation of vector images from raster shapes

## Purpose

- Resolution-agnostic, no pixelation at  larger sizes
- Smaller code bundle and payloads
- Less image files rqd, like for dark mode. Shrinks initial page load size and reduces asset count for maint, loading and caching.
- Dynamic CSS stroke, fill, and opacity for tagged objects embedded in SVGs
- For situations where original fonts from raster images are proprietary, or a matching font can't be found

## Trace

Trace image outlines, clean up paths and export.

Trace bitmap does not perform well on rasters with gradients and complex details.

## Trace Bitmap

Prioritize sharp edges:

- Brightness cutoff
- Edge detection

### Clean Up Paths

- Remove excess nodes, and smooth curves, using Node tool.

### Export to SVG

- Set stroke to black and fill none, or reverse
- Export

## Filter

- Use `Monochrome Transparency` filter to eliminate white, for a transparent background.
or

Use `Saturation Map` for an approximate, semi-transparent, colorable, image from saturation levels.
