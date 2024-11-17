---
title: awsome-pages Plugin
description: Essential MkDocs Navi Plugin
tags:
  - mkdocs-awesome-pages-plugin
---

## Description

{{ description }}

The aptly-named awesome-pages plulgin adds automatic and specific dir-based navi, without polluting `mkdocs.yml`.  For detailed usage instructions see [mkdocs-aweome-pages-plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin).

## Install

In the project [venv](../install.md#activate-venv):

```bash
pip install mkdocs-awesome-pages-plugin
```

## Usage

Create a `.pages` file in a dir:

```yml
nav:
  - index.md
  - first-sub-dir
  - first-page.md
  - ... | intro-*.md # all starting with "intro"
  - ... # all remaining entries
  - Title Text: some-page.md # Provide a title 
  - Link Title: https://some-site.com
  - last-page.md
```

### Rest Filter

Lines beginning with `...` are called `Rest Filters`.

A rest filter applies to items in the containing folder.  

## Custom Sections

```yml
nav:
  - index.md
  - section 1:
      - page1.md
      - page2.md
  - Section 2:
      - another-page.md
```

