---
title: Ruby
description: Programming Language
navigation: false
lastModified: '2025-03-17'
---

## Setup

### Install Ruby

Install Ruby, and its deps mgr, Bundler:

```bash
sudo apt install ruby-full build-essential zlib1g-dev
```

### Add $PATH

Add $PATH env var stmt to `@/bash/.bash_aliases` in [.dotfiles project](https://github.com/annebrown/dotfiles):

```bash
export PATH="$HOME/.gem/ruby/$(ruby -e "puts RUBY_VERSION.gsub(/\.\d$/, )")/bin:$PATH"
bash
```

## Install Deps Mgr

Install Bundler, Ruby's deps mgr:

```bash
sudo gem install bundler
```
