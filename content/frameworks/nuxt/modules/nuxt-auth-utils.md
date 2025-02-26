---
title: nuxt-auth-utils
description: Nuxt Authn Utility
lastModified: '2025-02-23'
---

## Description

Nuxt's `nuxt-auth-utils` utility adds authn and handles the entire authn flow, with secured sessions.

## nuxt-auth-utils

Install `nuxt-auth-utils`:

```bash
pnpm dlx nuxi module add auth-utils
```

## Session Cookie

Add session password to `@/.env`:

```ini
NUXT_SESSION_PASSWORD=a-random-password-with-at-least-32-characters
```
