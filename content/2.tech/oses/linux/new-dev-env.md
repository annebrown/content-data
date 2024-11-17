---
title: New Dev Env
description: Configure New Development Environment
---

## Description

{{ description }}

## Usage

Instructions for creating a new dev env for use on bare metal hosts, VM and cloud (GitPod).

## Dotfiles

Customized config using [GNU-Stow](https://gnu.org/software/stow/) symlink farm mgr.  See [Dotfiles Project](../../../dev/projects/dotfiles/index.md).

```bash
$ sudo apt update
$ sudo apt upgrade -y
$ git clone https://github.com/annebrown/dotfiles.git ~/.dotfiles
$ cd ~/.dotfiles
$ stow bash vim code hyper konsole
$ bash
```

## Auth

### Install Pwd Mgr

Install fav pwd mgr extension on fav browsers.

###  Two Factor Authn

For convenient 2FA, install GitHub Mobile, from Playstore, on phone and other mobile devices.  

# [Configure Git](../../apps/git/index.md)
