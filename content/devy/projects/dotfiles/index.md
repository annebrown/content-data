---
title: dotfiles
description:  dotfiles Project
navigation: false
lastModified: '2025-01-10'
---

## Description

The [dotfiles project](https://github.com/annebrown/dotfiles) povides a consistent linux development environment for a bare metal linux host, virtual machine, container, cloud (GitPod, GitHub.dev, StackBlitz, etc.), and for linux dev on other OSes (iOS, xOS, Android, RasPi, ChromeOS, Win11, etc).

Used in conjunction with dotfiles-priv.

Also inludes project, stack, host, OS, and desktop-flavor overrides.  Pulls in scripts for configuring multi-monitor layouts, starting required services and configuring apps (vscode, vim, terminals, git, etc.).  Brings additional static assets, including images and code.

> This project contains public config stuff.  Sensitive config data is sourced from dotfiles-priv.

## Repo

Public GitHub Repo: [content-data](https://github.com/annebrown/dotfiles)

## Usage

### Clone Repos

```bash
sudo apt install -y stow
git clone https://github.com/annebrown/dotfiles.git ~/.dotfiles
git clone https://github.com/annebrown/dotfiles-priv.git ~/.dotfiles-priv

```

### Link Farm

Link config files and dirs:

```bash
stow -d ~/.dotfiles bash vim vscode konsole hyper
stow -d ~/.dotfiles-priv git nas ...
```

## Related Links

[GNU Stow](https://www.gnu.org/software/stow/)

[XDG Base Directory Specs](https://specifications.freedesktop.org/basedir-spec/basedir-spec-0.8.html)
