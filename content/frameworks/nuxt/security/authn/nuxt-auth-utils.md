---
title: nuxt-auth-utils
description: Nuxt Authn Utility
lastModified: '2025-02-11'
---

## Description

Nuxt's `nuxt-auth-utils` utility adds authn and handles the entire authn flow, with secured sessions.

## nuxt-auth-utils

Install `nuxt-auth-utils`:

```bash
pnpm add nuxt-auth-utils
```

## Session Password

`nuxt-auth-utils` automatically generates a `NUXT_SESSION_PASSWORD` env var, if one isn't already set in `@/.env`.
