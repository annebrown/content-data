---
title: XXXXXXXX
description: XXXXXXXX
navigation: false
lastModified: '2025-01-19'
---

## XXXXXXXX

At least one body element is required to avoid this error in client apps built upon the Nuxt framework and `@Nuxt/content` module:

```txt
Document not found, overwrite this content with #not-found slot in <ContentDoc>.
```

## Other CMS Client Considerations

Use `navigation: false` to omit `index.md` files from navi.  Avoids dup routes (parent dir plus child 'index.md')
