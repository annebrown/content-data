---
title: Fav Bash Cmds
description: My Fav and Freq-Use Bash Cmd Ref
---

## Description

{{ description }}
 
## Network

### Info

```bash
hostname -I  # IP addy
```

### Add Local Ntwk Hosts

```bash
cat ~/.dotfiles-prov/etc/hosts | sudo tee -a /etc/hosts
```

## File System

### Append to File Owned by Root

```bash
cat some-file | sudo tee -a root-owned-file
echo "some text" | sudo tee -a root-owned-file
```

### Processes

```bash
$ fubar|grep -v "grep" fubar # Don't incl grep ps
```