---
title: Hyper
description: Hyper Terminal for Linux
tags: 
  - Hyper
---

## Description

{{ description }}

## Config File

Config File: `~/.config/Hyper/config.json`.  

Also: `Menu > Edit > Preferences` or `Ctrl+comma`

## Plugins Locn

## [dotfiles](../../../dev/projects/index.md))

## Prepare dotfiles config

If a Hyper config is already present in dotfiles, delete the newly installed config file.

Otherwise move settings file to [dotfiles](../../../dev/projects/index.md):

```bash
mkdir ~/.dotfiles/hyper ~/.dotfiles/hyper/.config ~/.dotfiles/hyper/.config/Hyper
mv ~/.config/Hyper/config.json ~/.dotfiles/hyper/.config/Hyper/config.json
```

Symlink config file:

```bash
user@host:~/.dotfiles $ stow hyper
```

## Refresh Terminal

Refresh terminal to reload config:

 `Menu > View>  Reload` or `Ctrl-Shift-R` or restart app.

## [Plugins](plugins.md)

