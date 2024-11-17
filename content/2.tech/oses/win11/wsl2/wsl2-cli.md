---
title: WSL2 CLI
description: Linux Shell Program and Command Lang
---

## Description

{{ description }}

Run from windows CLI (.exe extension not rqd).

## Installed Distros

```bash
wsl --l		# list distros
wsl -l -v	# verbose
```

## Start

`bash` or `wsl` or:

```bash
wsl -d distro-name 	        # startup a specific distro
usl -u anne -d distro-name	# login as anne
```

## Shtudown

```bash
wsl --shutdown
wsl -t distro 		# terminate/shutdown a distro
```

## Change default user 

```bash
dist_name config --default-user anne
```

## Set Default Distro

```bash
wsl -s distro-name
```

## Delete

```bash
wsl --unregister distro_name
```

## Terminate/Shutdown

```bash
wsl -t distro_name
wsl --shutdown    # All running distros
```
