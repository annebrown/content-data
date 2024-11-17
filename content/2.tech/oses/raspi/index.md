---
title: RasPi
description: RaspPi Operating System
tags:
  - RasPi
---

## Description

{{ description }}

## Shortcuts

- Terminal: Ctrl-Alt-T
- Displays: arandr

## Desktops

### Default

LXDE

### LxQt

```bash
sudo apt update && sudo apt -y full-upgrade
sudo apt install lxqt
sudo reboot
```

## Firmware Update

```bash
sudo rpi-update
sudo reboot
```

## Add/Remove Software

Menu>Preferences>Add/Remove Software

Menu Item Props:

- Locn: menu:applications/DesktopSettings
- Target file: /usr/share/applications/pi-packages.desktop

### Pi-Apps

```bash
pi-apps
```

Apps:

- Chromium
- Firefox Rapid Release
- Github-CLI
- Github Desktop
- Hyper

## Update Software

```bash
sudo apt update
sudo apt full-upgrade
```

## Config

### GUI

```bash
sudo raspi-config
```

### CLI

```bash
sudo raspi-config noint <command> <args> [optional-args]
```


