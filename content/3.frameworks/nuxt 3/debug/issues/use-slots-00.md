---
title: Use Slots Error
description:  Use Slots with ContentQuery
lastModified: '2025-01-08'
---

```json
message "{
  "message": "You should use slots with <ContentQuery>!"
}
```

- Rendered in place of content by the nuxt dev server
- Occurs after modifying a '/content' markdown file, and then page refresh
- Refreshing again yields the same message
- Navigating to another page and then returning, renders the page content as expected.
- Code appears to be correct because it renders pages without error,
- Something happening in rehydration?
