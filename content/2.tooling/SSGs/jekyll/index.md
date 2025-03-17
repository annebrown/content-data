---
title: Jekyll
description: Static Site Generator
navigation: false
lastModified: '2025-03-17'
---

## Setup

### Install Ruby

Jekyll is built on Ruby.  See [Install Ruby](../../../languages/ruby/index.md#setup).

## Install Jekyll

```bash
sudo gem install jekyll
```

## Initialize

Initialize Jekyll in repo:

```bash
cd <path/to/repo>
jekyll new . --force
```

## Config

`_config.yml`:

```yaml
title: Site Title
description: Site Descr
theme: minima
collections:
  content:
    output: true
    permalink: /:content/
```

## Gems

To prevent perms errors, configure `bundler` to install gems in '$HOME' dir:

```bash
bundle config set --local path 'vendor/bundle'
```

## Theme

Install default theme:

```bash
bundle install
```

## Dev Server

Build site and start dev server:

```bash
bundle exec jekyll serve
```
