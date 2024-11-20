---
title: Install Hyper
description: Install Hyper Terminal
---

## Description

{{ description }}

## Required Libraries

Install rqd libs deps:

```bash
sudo apt install -y libxss-dev wget

```

## Download & Install

Download from [official site](https://hyper.is) and isntall:

```bash
sudo dpkg -i hyper*.deb
```

## Run

Run w verbose to test:

```bash
hyper -v
[9913:0721/075156.428196:FATAL:setuid_sandbox_host.cc(157)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /opt/Hyper/chrome-sandbox is owned by root and has mode 4755.
```

Fix perms prob:

```bash
sudo chown root /opt/Hyper/chrome-sandbox
sudo chmod 4755 /opt/Hyper/chrome-sandbox
```

## Reload

Reload term to pick up [dotfiles](../../../dev/projects/index.md) customized config, if exists:

 `Menu > View>  Reload` or `Ctrl-Shift-R`

 Also reload, if at first, `rt-mouse-button` doesn't trigger context menu.

## [Config](config.md)
 
