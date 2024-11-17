---
title: journalctl Command
description: Linux Log Viewer
---

## Description

{{ description }}

## Purpose

The ```journald``` daemon collects logs.

 ```journalctl``` is used to view them.

## Usage

 ```bash
 journalctl
 ```

Displays every journal entry in the system, starting with the oldest.  Pages using ```less```.

### Everything since Most Recent Boot

```bash
journalctl -b
```

## Save Past Boot Logs

```bash
sudo mkdir -p /var/log/journal
```

And, in ```/etc/systemd/journalctl.conf```:

```bash
[Journal]
Storeage=persistent
```

## List Past Boots

```bash
journalctl --list-boots
```

Output:

```console
-2 cafg.... Date time stuff
-1 abx...
 0 abcbootID....
```

## Journal From Previous Boot

```bash
journalctl -b -1
```

or by boot ID:

```bash
journalctl -b abcBootID....
```

## Time Frames

```bash
journalctl --since "YUYYY-MM-DD HH:MM:SS"
```

If date is omitted, Today will be assumed.  If the time is ommited, midnight is substituted.

```bash
journalctl --since "2024-06-11" --until ""2024-06-12 17:05"
```

```bash
journalctl --since yesterday # yesterday, today, tomorrow, now
```

## Filtering by Log Type

```bash
journalctl -u bluetooth.service
```

## Filtering by PID

 ```bash
journalctl _PID=1234
 ```

## By User or Group

```bash
id -u www-data  # Return UID
```

Output:

```console
33
```

then:

```bash
journalctl _UID=33 --since today 
 ```

## Show All Values for a given Journal Field

```bash
journalctl -F _GID
```

## By Path

List all entries for bash executable

```bash
journalctl /usr/bin/bash
```

Useful if executable doesn't have a unit available (-u)
