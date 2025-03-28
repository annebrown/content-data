---
title: New Dev Env
description: Configure New Dev Env
lastModified: '2025-01-08'
---

## Purpose

Consistent linux development environment for bare metal linux host, virtual machine, container, cloud (GitPod, GitHub.dev, StackBlitz, etc.), and for linux dev on other OSes (iOS, xOS, Android, RasPi, ChromeOS, Win11, etc).  See [dotfiles Project](../../devy/projects/dotfiles/index.md).


## Description

Customized config using [GNU-Stow](https://gnu.org/software/stow/) symlink farm mgr.

## Usage

```bash
$ git clone https://github.com/annebrown/dotfiles.git ~/.dotfiles
$ cd ~/.dotfiles
$ stow bash vim code hyper konsole ...
```
