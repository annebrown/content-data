---
title: Meta Built-in Plugin
description: Meta Material Built-In Plugin
tags:
  - Meta Plugin
---

## Description

{{ description }}

[Meta](https://squidfunk.github.io/mkdocs-material/plugins/meta "Official Site") recursively merges the contents of `.meta.yml`  files with the frontmatter of all pages contained in the same folder and all subfolders.  This, with the help of other plugins, enables powerful features, such as inherited tags:

```md
---
title: some title
description: some descr
tags: 
 - Issues
 - VSCode
 - OPEN
```

All pages in the containing folder receive these tags, with the help of another Material built-in `tags` plugin.

## Config

`mkdocs.yml`:

```yml
plugins: 
  - meta
```
