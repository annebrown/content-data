---
title: Node.js
description: Open-Source, Cross-Platform JavaScript Runtime Environment
---

## Description 

My notes on Node.js, {{ description }}

## Install

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Config

Append to .bashrc

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### Install node

Installs per user, not root, so avoids perms issues.

```bash
nvm install 20 # ver 20
node -v # test install
```

## List Installed Pkgs

```bash
$ npm list
/home/anne
|_(empty)
```
