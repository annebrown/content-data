---
title: Node.js Install EACCESS Error
description: Permissions error installing Node.js
tags:
  - Issues
  - SOLVED
---

{{ description }}

## Status

SOLVED

## Error

```bash
nvm install 20
npm ERR! code EACCES
  ...
```

## Solution

```bash
sudo chown -R $(whoami) ~/.npm
```