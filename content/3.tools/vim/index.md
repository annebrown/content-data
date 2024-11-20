---
title: Vim
description: Essential dev tool
tags:
  - Vim
---

## Description

{{ description }}

- Built-in on all popular linux distros
- Extensions available for most popular terminals, browsers, text editors, IDEs, and for many other dev tools.
  
## Config

If configured in [dotfiles](../../../dev/projects/index.md), delete `~/.vimrc` file and `~/.vim` dir, else, move system vim config to dotfiles:

```bash
mv ~/.vimrc ~/.dotfiles/vim/.vimrc 
mv ~/.vim ~/.dotfiles/vim/.vim
```

Then symlink config:

```bash
user@host:~/.dotfiles/ $ stow vim
```
