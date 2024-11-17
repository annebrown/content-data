---
title: md_in_html Built-In Extension
description: Allow HTML in Markdown Docs
tag:
  - md_in_html
---

## Description

{{ description }}

The md_in_HTML built-in Python extension parses Markdown inside of HTML tags, allowing very flexible, quick and dirty custom styling.  While it not recommended to place HTML inside markdown files, it is useful for specific customizations, for example, providing [customization for a single page](../styling.md#page-specific-styling).

## Config

In `meta.yml`:

```yml
markdown_extensions:
  - md_in_html
```

