---
title: Memory
description: VSCode Memory
lastModified: '2025-01-07'
---

## Description

A device hosting VSCode processes,  experiences errors and can become unresponsive when process memory reaches or exceeds memory limits. 

## Purpose

Increase memory avail to VSCode processes

## VSCode

### Extensions

- Remove Non-Essential Extensions
- Turn off Extensions sync

### Alt Tooling

VSCode is resource-intensive, comparatively, for simple, specialised tasks.

For more narrowly focused activities, like markdown editing, use dedicated apps with significantly smaller memory footprints than VSCode.   

## Node.js

Increasing Node.js heap size.

 Set NODE_OPTIONS env var before deploying dev servers:

```bash
export NODE_OPTIONS="--max-old-space-size=8192" // Set to 8GB
```

Use a Node.js memory profiling tool to gain more insight into app memory usage.

## Dev Server

For SSG, adjust Nitro's `perender` build config in `nuxt.config.ts for improved mem mgmt.

## Device

### Limit Processes

- Close unnecessary browser tabs
- Exit unessential processes

### Increase Soft Limit

Increase UNIX soft memory limit for VSCode.  

Invoke `ulimit` before launching VSCode:

```bash
ulimit -S -m limited
code .
```

### Increase Hard Limit

```bash
ulimit -H -m unlimited
code .
```

### Optimise Kernel

Adjust kernel parameters (like `vm.max_map_count` and `vm.swappiness`) to optimise memory usage.

### Swap 

Increase Swap space.

## Hardware

### SSD

Solid-State-Drives Improve system responsiveness.

### CPU

Upgrade CPU

### RAM

Upgrade RAM

## Workflow

### Refresh

Restart VSCode to release memory.  

Refresh code:

```bash
rm -rf node_modules .next[ or .nuxt or oth framework] .pnpm-lock
pnpm i
```

Tree-shake unused pkgs:

```bash
pnpm prune
```

