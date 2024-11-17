---
title: Logs
description: Linux Log Files and Mgmt
---

## Description

{{ description }}


## Path

```/var/log```

## Log Types

- `apt/history.log`
	- pkg install and removal info
	- includes the initial system build as Live CD

- `boot.log`
- `kern.log` - kernel info, such as warnings, errors, ...

- `syslog` - System logs, such as kernel activities
- `Xorg.log` - graphics driver, its failures, warnings, etc.

## journalctl 

```journalctl --list-boots```

Logging is mostly handled by the `journalctl` utility.

`journalctl` - provides required logs.

Logs are stored in binary in `/var/lib/systemd/catalog/database` file.

This file enumerates all logs incl. kernel, boot and app logs.


See also: [Basic Log Viewing](journalctl.md).
