---
title: XXXXXXXX
description: XXXXXXXX
lastModified: '2025-03-25'
---

## XXXXXXXX

At least one body element is required to avoid this error in client apps built upon the Nuxt framework and `@Nuxt/content` module:

```txt
Document not found, overwrite this content with #not-found slot in <ContentDoc>.
```

## Other CMS Client Considerations

### Frontmatter

The following frontmatter fields are mandatory for non-index markdown files:

```markdown
---
title: XXXXXXXX
description: XXXXXXXX
lastModified: '2025-01-19'
---

```

`lastModified` is automatically updated on save when editing this project in VS Code.
