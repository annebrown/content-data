---
title: New Host Config
description: Install Linux Dev Env on Android
---

## Description

{{ description }}

## Install userland

Install Userland from Playstore.

## Change hostname

```bash
sudo hostname [device name]
sudo apt install -y vim
sudo vim /etc/hostname 
```

## Add Network Hosts

```bash
cat ~/.dotfiles-priv/etc/hosts | sudo tee -a /etc/hosts
```

## Add Service Config

```bash
sudo apt install -y systemd
```

- Disconnect distro and stop app.
- Restart device