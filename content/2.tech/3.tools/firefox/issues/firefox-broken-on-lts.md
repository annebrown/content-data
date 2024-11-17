---
title: Firefox Broken on LTS Distro
description: Broken FF on Ubuntu 24.04 LTS
tags:
  - Issues
  - SOLVED
---

## Description

Totes Issues w {{ description }}

## Fix

### Remove Default Distro Snap

```bash
sudo snap remove firefox # Broken firefox snap
```

### Create apt keyring

```bash
sudo install -d -m 0755 /etc/apt/keyrings
```

### Import Mozilla apt Repo Signing Key

```bash
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
```

### Add to `sources.list`

```bash
echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
```

### Make FF Deb Top Priority

Make FF deb pkgs top priority, to prevent snap install.

```bash
echo '
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000
' | sudo tee /etc/apt/preferences.d/mozilla
```

### Get Mozilla pkgs list

```bash
sudo apt update
```

### Install firefox

```bash
sudo apt install firefox
```

or

```bash
sudo wget https://raw.githubusercontent.com/mozilla/sumo-kb/main/install-firefox-linux/firefox.desktop -P /usr/local/share/applications
```

## Status

SOLVED
