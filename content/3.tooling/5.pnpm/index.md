---
title: pnpm
description: Node Module Manager
navigation: 'false'
---

## pnpm Equivalents for npm CLI

### Run nuxi CLI & Add Module

```bash
npx nuxi@latest module add some-module
```

### pnpm Equiv

Install `nuxi` globally:

```bash
pnpm install -g nuxi
```
Use `nuxi` cmd directly:

```bash
nuxi module add some-module
```

or

Install nuxi locally as a dev dep:

```bash
pnpm add -D nuxi
```

then run nuxi module and add some-module:

```bash
pnpm run nuxi module add some-module
```
