---
title: Extensions
description: VSCode Extension Config
tags:
  - VSCode
---

## Description

{{ description }}


## Git

Automatic, periodic git fetch on remotes: 

```"git.autofetch": true,``` 

## MarkdownLint

### MD007/ul-indent

The Markdown rule MD007/ul-indent expects an unordered list indentation of 2 spaces.  This causes the indentation to be lost on MD preview and HTML rendering.

Fix:

```json
{
    "markdownlint.config": {
        "MD007": { "indent": 4 },
    }
}
```

## Vim

### `.vimrc`

Use my `.vimrc`:

```"vim.vimrc.enable": true,```

### Esc Mapping

Map `Esc` to `jj`:

```json
"vim.insertModeKeyBindings": [
    {
        "before": ["j", "j"],
        "after": ["<Esc>"]
    }
],
```

## YAML

MkDocs Schema:

```json
yaml.schemas": {
    "https://squidfunk.github.io/mkdocs-material/schema.json": "mkdocs.yml"
  },
  "yaml.customTags": [ 
    "!ENV scalar",
    "!ENV sequence",
    "!relative scalar",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.to_svg",
    "tag:yaml.org,2002:python/name:material.extensions.emoji.twemoji",
    "tag:yaml.org,2002:python/name:pymdownx.superfences.fence_code_format"
  ]
```
