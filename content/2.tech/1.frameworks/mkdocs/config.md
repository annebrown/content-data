---
title: Config
description: MkDocs Config
---

## Description

{{ description }}

## The `mkdocs.yml` File

Most of MkDocs config is done in the `[proj-dir]/mkdocs.yml` file.  For some plugins, order matters.  

The next section contains sample settings.  Some of these are covered [here](../mkdocs/add-ons/index.md).

## Sample Settings

These settings were copied from the `meta.yml` config of a working implementation.

### Project Settings

```yml
#-------------------------------------------------------------------------------
# mkdocs.yml - docs-pub
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
# Project:
#-------------------------------------------------------------------------------
site_name: docs.annebrown.ca
site_url: https://docs.annebrown.ca
site_author: Anne Brown
site_description: Technical Reference Docs
```

### Watches

To provide live preview, MkDocs server watches its default confg and dirs for changes.  Add items here to include additional dirs to watch.

```yml
#-------------------------------------------------------------------------------
# Watches
#-------------------------------------------------------------------------------
watch:
  - includes
```

### Repo

Connect proj to its source repo for  view, edit, etc.:

```yml
#-------------------------------------------------------------------------------
# Repo
#-------------------------------------------------------------------------------
repo_name: annebrown/docs-pub
repo_url: https://github.com/annebrown/docs-pub
```

### Copyright

```yml
#-------------------------------------------------------------------------------
# Copyright
#-------------------------------------------------------------------------------
copyright: Copyright &copy; 2024 Anne Brown
```

### Theme

```yml
#-------------------------------------------------------------------------------
# theme:
#-------------------------------------------------------------------------------
theme:
  name: material
  custom_dir: overrides
  #-----------------------------------------------------------------------------
  # Material Features:
  #-----------------------------------------------------------------------------
  features:
#    - announce.dismiss
    - content.action.edit
    - content.action.view
    - content.code.annotate
    - content.code.copy
    - content.tooltips
    - header.autohide
    #- navigation.expand
    - navigation.footer
    - navigation.indexes
    #- navigation.sections
    - navigation.path
    - navigation.tabs
    - navigation.tabs.sticky
    - navigation.top
    #- navigation.tracking
    - search.highlight
    - search.share
    - search.suggest
    - toc.follow
    #- toc.integrate
  #-----------------------------------------------------------------------------
  # palette:
  #-----------------------------------------------------------------------------  
  palette:
    # Palette toggle for automatic mode
    - media: "(prefers-color-scheme)"
      toggle:
        icon: material/brightness-auto
        name: Switch to light mode
    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default 
      primary: blue
      accent: green
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    # Palette toggle for dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: blue
      accent: light green
      toggle:
        icon: material/brightness-4
        name: Switch to system preference
  #-----------------------------------------------------------------------------
  # Font
  #-----------------------------------------------------------------------------
  font:
    text: Roboto
    code: Roboto Mono
  #-----------------------------------------------------------------------------
  # Images
  #-----------------------------------------------------------------------------
  icon:
    tags:
      HTML: fontawesome/brands/html5
      JavaScript: fontawesome/brands/js
      CSS: fontawesome/brands/css3
  logo: assets/images/logo.png
  favicon: assets/images/favicon.ico
```

### Analytics and Cookies

```yml
#-------------------------------------------------------------------------------
# extra:
#-------------------------------------------------------------------------------
extra:
  analytics:
    provider: google
    property: G-[Your Google Analytics Property]
  consent:
    actions:
      - reject
      - accept
      - manage
    title: Cookie consent
    description: >- 
      This site's cookies record your visits and prefs. Your privacy, your choice.
  generator: false # Made with Material for MkDocs
```

### Extending and Overriding Theme Sytling

```yml
#-------------------------------------------------------------------------------
# extra_css:
#-------------------------------------------------------------------------------
extra_css:
  - stylesheets/extra.css
```

### Markdown Extensions

```yml
#-------------------------------------------------------------------------------
# markdown_extensions:
#-------------------------------------------------------------------------------
markdown_extensions:
  - abbr
  - admonition
  - attr_list
  - def_list
  - footnotes
  - md_in_html
  - pymdownx.betterem
  - pymdownx.details
  - pymdownx.emoji:
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
      emoji_index: !!python/name:material.extensions.emoji.twemoji
  - pymdownx.highlight:
      #anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite
  - pymdownx.keys
  - pymdownx.snippets:
      auto_append: 
        - includes/abbr.md
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
      combine_header_slug: true
      slugify: !!python/object/apply:pymdownx.slugs.slugify
        kwds:
          case: lower
  - pymdownx.tasklist:
      custom_checkbox: true
  - toc:
      permalink: true
```

### Plugins

```yml
#-------------------------------------------------------------------------------
# plugins:
#-------------------------------------------------------------------------------
plugins:
  - awesome-pages
  - search
  - git-revision-date-localized:
        exclude:
        - index.md
  - meta-manager
  - task-collector:
      output_file: dev/docs-proj/meta/TaskList.md
  - tags:
      tags_file: dev/docs-proj/meta/tags.md
  - macros
```

## VSCode YAML Schema

Add MkDocs Schema to VSCode.  See [VSCode YAML Extension](../../apps/vscode/extensions.md#yaml)