---
title: SIGTRAP
description: Common Electron Linux Error
lastModified: '2025-01-08'
---

## Error

`electron exited with signal SIGTRAP`:

```bash
$ pnpm run start
> shortcut-panel@1.0.0 start /home/anne/electron/shortcut-panel
> pnpm exec tsc && electron ./dist/main.js

[60982:0102/192337.249491:FATAL:setuid_sandbox_host.cc(163)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /home/anne/electron/shortcut-panel/node_modules/.pnpm/electron@33.2.1/node_modules/electron/dist/chrome-sandbox is owned by root and has mode 4755.
/home/anne/electron/shortcut-panel/node_modules/.pnpm/electron@33.2.1/node_modules/electron/dist/electron exited with signal SIGTRAP
 ELIFECYCLE  Command failed with exit code 1.
[19:23:37] anne@devy: ~/electron/shortcut-panel/
```

## Description

Electron's sandboxing mechanism expects the chrome-sandbox binary to have `root` ownership and mode `4755`. If not set as such, Electron refuses to run and exits with a SIGTRAP error:  `electron exited with signal SIGTRAP`

## Set Up setuid Bit

Configure the chrome-sandbox binary to be executed as root with mode '4755'.

Get chrome-sandbox locn:

```bash
$ find ./nodfind ./node_modules -name "chrome-sandbox"
./node_modules/.pnpm/electron@33.2.1/node_modules/electron/dist/chrome-sandbox
```

Set setuid bit:

```bash
sudo chown root:root ./node_modules/.pnpm/electron@33.2.1/node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 ./node_modules/.pnpm/electron@33.2.1/node_modules/electron/dist/chrome-sandbox
```
