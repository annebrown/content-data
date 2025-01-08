---
title: 'npm Equivalents'
description: 'pnpm Equivalents for npm CLI'
lastModified: '2025-01-08'
---

### Run nuxi CLI & Add Module

### npm

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
