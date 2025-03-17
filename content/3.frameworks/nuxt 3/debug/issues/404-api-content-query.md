---
title: Console 404
description: Console 404 for Existing '@/pages/'
lastModified: '2025-03-14'
---

## Description

Incorrect behavior of Nuxt in causing 404 console errors for valid `/pages` routes meant for prerender

On initial load, a 404 console error is produced for each visible `NuxtLink` (representing a route in the `@/pages` subtree), on the loaded page.

Console Error:

```txt
Failed to load resource: the server responded with a status of 404 (Document not found!)
```

URL:

```txt
http://192.168.4.21:3222/api/_content/query?_params=%7B%22where%22:%5B%7B%22_path%22:%22%2Fdevy%2Flogin%22%7D%5D,%22first%22:true,%22sort%22:%5B%7B%22_stem%22:1,%22$numeric%22:true%7D%5D%7D
```

The `ignores` property in `nuxt.config.ts`, which explicitly includes these errant routes, is not behaving as expected.

Unnecessary 404 requests can impact performance, SEO, DX, etc.

## Explanation

Nuxt prefetches components and payloads of `NuxtLinks` as they enter the viewport.

Console 404 errors are being produced for valid,`@/pages` route links meant for prerender.

## Workarounds

Even if the cause of these errors turns out to be unimportant, and even if it has no significant impact on the app, it still produces unacceptable console noise.

The console error can be subdued by replacing `NuxtLink`s with `a` elements, however, this would eliminate client-side navi offered by the NuxtLink wrapper.

A more targeted approach would be to add a `:prefetch="false"` attribute to a `<NuxtLink>`.  While this maintains the benefits of NuxtLink, it will not scale well.

## Bug

Could be a bug in how prefetching interacts with prerendered routes
