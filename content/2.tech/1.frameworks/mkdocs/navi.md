---
title: Navi
description: MkDocs Navi
---

## Description

{{ description }}

## `nav` Config Setting

The `/mkdocs.yml` file's `nav:` config setting defines global site navi contents and structure.  

If absent, navi is automatically, alphabetically generated from all of the MD files in `docs`, with `index` files at the top of sub-sections.

Titles can be inferred from MD file front-matter, from config files or from filename:

```yml
nav:
  - Home: 'index.md'
  - 'about.md'
```

Titles defined in the `nav:` item of  `/mkdocs.yml` will be used throughout the site for that page and overrides titles defined in MD files.

## Index Pages

If both an `index.md` and a `README.md` are found in a dir, `README.md` is ignored.

## awesome-pages Plugin

The powerful [mkdocs-awesome-pages-plugin](../mkdocs/add-ons/mkdocs-awsome-pages-plugin.md) provides essential, custom navi.
