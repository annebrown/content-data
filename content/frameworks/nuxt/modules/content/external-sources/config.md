---
title: Config
description: External Source Config
lastModified: '2025-01-11'
---

## GitHub

Configure `nuxt.config.ts` for a GitHub public repo:

```json
content: {
    documentDriven: true,
    // Ignore "Number Dot" ordering in /content
    ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

    sources: {
        github: {
          prefix: '/docs-pub', // Route prefix for remote contents
          driver: 'github', // Unstorage driver
          repo: "annebrown/content-data",
          branch: "main",
          dir: "content", // Dir in external repo where contents are located.
        },
    }
},

```

> NOTE: Once a client app has accessed a GitHub repo `/content`, the repo name in the `sources:`, a relationship is made between teh client and GitHub, which no longer necessitates must not be changed.  When
>
> source, supports changing the repo name and still keeping wh API endpoint of

## Local FS Source

To reduce traffic and improve DX, clone and maintain the external source locally on devy host.

Config `nuxt.config.ts` to access the locally cloned content repo:

```js
local: {
    prefix: '/docs-pub-local', // Prefix for routes
    driver: 'fs',
    base: resolve(__dirname, '/$PATH_TO_CLONED_REPO/content'),
},
```

This allows for viewing modifications to the content, without waiting for the published app to re-deploy and rebuild it's /content.  As well, this reduces hosting costs as pricing is based on BW, serverless function execution, and build minutes.
