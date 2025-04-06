---
title: 'pnpm'
description: 'Node Module Manager'
navigation: 'false'
lastModified: '2025-03-31'
---

## Description

Better performance, more efficient deps mgmt

## CLI

```bash
pnpm rm # | uninstall | un
pnpm add <pkgs> # Install
pnpm i <pkgs> # install
pnpm i # Install all in package.json
pnpm prune # Remove unness pkgs
pnpm cache delete # [<pkgs>]
pnpm ls # List installed modules or packages
pnpm ls --depth=0 # Show only top-level deps
pnpm why <pkg> # Deps relationships
```

## dlx

- Download and execute a pkg from the npm registry wo installing it globally or locally in a project
- Run a script from a pkg wo installation
- For tools and CLIs not intended for global installation
- Temporary files are removed after execution

Example, create React app wo installing `create-react-app`.

```bash
pnpm dlx cowsay "Moo!" # Display a cow saying quoted args
pnpm dlx create-react-app my-app # Create new React app
pnpm dlx http-server # Run Local web server to serve static content in cwd
```
