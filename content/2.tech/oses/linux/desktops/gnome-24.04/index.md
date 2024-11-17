---
title: Gnome Desktop
description: Gnome Desktop Config
---

## Description

{{ description }}
 
## Dark Theme

```bash
vim ~/.config/gtk-3.0/settings.ini
```

```bash
[Settings]
gtk-application-prefer-dark-theme = true
```

and

```bash
gnome-tweaks&
```

to set **Appearance** > **Legacyt Application**s > **Adwaita-dark**

## Settings Apps

```
gnome-tweaks
gnome-control-center
```

## gnome-terminal

Add to ```~/.dotfiles/bash/.bash_aliases```:

```bash
alias gterm='gnome-terminal --title="$USER@$HOSTNAME: $PWD \$" &'
alias xfterm='xfce4-terminal --title="$USER@$HOSTNAME: $PWD \$" &'
```

