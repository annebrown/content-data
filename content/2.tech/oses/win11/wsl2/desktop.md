---
title: Linux Desktop
description: Install and configure Linux desktop on Win11
---

## Description

{{ description }}


## Install Distro

Install Distro from M$tore, then:

```bash
sudo apt-get update
sudo apt-get upgrade
```

## Block ACPI

Block ACPI features from being installed.

```bash
sudo apt-mark hold acpid acpi-support
```

## Install Desktop

```bash
sudo apt install xfce4 xfce4-goodies gdm3 xwayland nautilus
```

## Run desktop

```bash
pkill Xwayland; Xwayland :1 & xw_pid=$!; WAYLAND_DISPLAY= DISPLAY=:1 dbus-launch startxfce4; kill $xw_pid
```

Ref: [Easiest WSL2 Desktop Setup Possible](https://www.reddit.com/r/bashonubuntuonwindows/comments/1ajbzyk/easiest_wsl2_desktop_setup_possible/?onetap_auto=true&one_tap=true)

## [Config Dev Env](../../linux/new-dev-env.md)

## Install Chrome

Firefox broken on Ubuntu WSL2.  

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

If errors during install:

```bash
sudo apt -f install
```

If `gnome-terminal` Throws Errors

```bash
wsl --update --pre-release
```

## Non-Desktop Fix

If session won't start, enable lxdm.

## VSCode

For WSL2 hosts, do not install VSCode in linux.  Or better yet, avoid the WinMill:money_mouth: completely. :neutral_face:
