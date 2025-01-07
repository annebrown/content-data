---
title: Build
description: Build Times
lastModified: '2025-01-07'
---

## Bundling

While N&N have built-in support for Tailwind, it can also be fully integrated into Angular.  

Tailwind adds an enormous amount of [unnecessary styling data](/content/frameworks/tailwind/bloat.md), comprising unused and overridden styles.

All frameworks can be configured to remove style bloat, which is essential for isolating styling issues (Inspect), and reducing bundle sizes.

Angular and Next.js use Webpack for bundling and build tasks, while Nuxt uses Vite.

During the build, N&N use Tailwind for tree-shaking.

Angular has its own, opinionated build system, whereby, Angular compiles the app, webpack processes css files and postcss-cli applies PostCSS plugins (Tailwind).

Even tho the core Tailwind process of scanning files and purging unused classes is the same, and a pruned CSS file is similarly achieved for all frameworks, the specific bundling processes differ as the build tools used are different.
