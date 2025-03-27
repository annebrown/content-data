---
title: XXXXXXXX
description: XXXXXXXX
navigation: false
lastModified: '2025-03-25'
---

## h2 Text

At least one body element is required to avoid this error in client apps built upon the Nuxt framework and `@Nuxt/content` module:

```txt
Document not found, overwrite this content with #not-found slot in <ContentDoc>.
```

## Other CMS Client Considerations

### Frontmatter

The following frontmatter fields are mandatory for index files:

```markdown
---
title: XXXXXXXX
description: XXXXXXXX
navigation: false
lastModified: '2025-01-19'
---

```

`lastModified` is automatically updated on save when editing this project in VS Code.

`navigation: false` is used to omit `index.md` files from navi, to void dup routes (parent dir plus child 'index.md')
