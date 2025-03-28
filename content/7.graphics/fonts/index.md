---
title: Fonts
description: 'Font Config'
navigation: false
lastModified: 2025-03-28
---

## Ubuntu LTS

### System-Wide Fonts

#### Ubuntu Repos

Search Ubuntu repositories:

```bash
apt search fonts-
```

Install:

```bash
sudo apt install fonts-some-font
```

#### Downloads

Download and extract `.ttf` or `otf` file to `usr/share/fonts/truetype/`
and update font cache:

```bash
sudo fc-cache -fv
```

### User-Specific

Download and extract `.ttf` or `otf` file to `~/.local/share/fonts/` and update font cache:

```bash
sudo fc-cache -fv
```

## App-Specific

### Inkscape

- Uses system-wide and user-specific fonts, which may not be available to the user's browser
- Text must be converted to paths
