---
title: TOC Missing a Link
description: Awesome Pages Not Attaching URL to TOC Sidebar Entry
tags:
    - Issues
    - MkDocs
    - awesome-pages
    - mkdocs-awesome-pages-plugin
    - TOC
    - OPEN
---

## Description

{{ description }}

- Tech dir has:

```yml title=".pages"
nav:
  - index.md
  - ...
  - links.md

```

```txt
Sidebar TOC:
    Tech
       Apps
       Frameworks
       Langs
       Oses
       Links
```

## Problem

- On hover, all Tech sub-topics display a URL, except Langs
- TOC not using page titles from md files.

## Status

OPEN
