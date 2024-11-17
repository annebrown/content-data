---
title: Linux Dev Env
description: Install Linux Dev Env on ChromOS Host
---

## Description

{{ description }}

## Install LDE

### [Turn on Developer Mode](index.md/#developer-mode)

### Install Crouton

1. Download [Crouton](https://goo.gl/fd3zc).
2. Restart device.
3. Ctrl-D on Developer Mode screen.
4. Ctrl-Alt-T, when screen updates, then Enter to open ChromeOS terminal.
5. Enter shell:

    ```crosh> shell```

6. Make executable:

    ```chronos@localhost / $ sudo install -Dt /usr/local/bin -m 755 \
	~/Downloads/crouton```

7. Pull the Trigger

    ```chronos@localhost / $ sudo crouton -t touch,[xfce|lxde|kde]```

8. Desktop

    ```chronos@localhost / $ sudo cruton -t [xfce|lxde|kde]```

9. Provide password.

### Enter Distro

1. Ctrl-D to turn OS Verif off.
2. Ctrl-Alt-T for terminal.
3. ```crosh>shell```
4. sudo enter-chroot start[xfce|lxde|kde]

## ChromeOS/LDE Hot Switch

arm arch: Ctrl-Alt-Shift-Fwd/Ctrl-Alt-Shift-Back

intel arch: Ctrl-alt-Fwd/Ctrl-Alt-Back [then Ctrl-Alt-Refersh on some devices]

## Configure

### Hostname

1. ```sudo vim /etc/hostname # Not $ sudo hostname```
2. Shutdown linux
3. Reboot device

### [Add Local Ntwk Hosts](../linux/bash/fav-bash-cmds.md#add-local-ntwk-hosts)
