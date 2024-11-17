---
title: Images
description: MkDocs Image Handling
tags:
  - MkDocs Images
---

## Description

{{ description }}

## Install Deps

Image processing libs need to be installed for enhanced image processing:

```bash
activate .venv/bin/activate  # use proj venv
pip install "mkdocs-material[imaging]"
apt-get install libcairo2-dev libfreetype6-dev libffi-dev libjpeg-dev libpng-dev libz-dev
apt-get install pngquant
```

Restart dev env to load rqd env vars.

## Configure Extensions

To add alignment, captioning and lazing-loading capabilities, add to `mkdocs.yml`:

```yml
markdown_extensions:
  - attr_list
  - md_in_html
```

See [attr_list](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/#attribute-lists) and [md_in_html](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/#markdown-in-html) for config deets.

## Zoom Plugin

Install:

```bash
source .venv/bin/activate
pip install mkdocs-glightbox
```

Configure:

```yml
plugins:
  - glightbox
```

Refer to [glightbox](https://github.com/blueswen/mkdocs-glightbox#usage) for config options.
