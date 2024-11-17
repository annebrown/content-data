---
title: Deploy - Vercel
description: Porjects deployed to [Vercel](https://vercel.com/  "Official Site")
tags:
  - Vercel
---

## Description

{{ description }}

## Deployments

<https://www.browndomain.com> (Next.js full-stack)

<https://priv.browndomain.com> (Next.js full-stack App with Authn)

## Install Vercel CLI

```bash
npm i -g vercel
```

## Update

```bash
npm i -g vercel@latest
```

## Test

```bash
vercel -v
```

## Build

```bash
vercel build # build url: .vercel/output
```

## Preview Output

## Deploy

```bash
vercel deploy --prebuilt
```

or

```bash
vercel [path-to-project]
```

Vercel detects the project type (Hugo, Angular, etc.), and enables the approp setting.

## Manual Config

Place `vercel.json` config file in project root.

`vercel.json`:

```yaml
{
  "buildCommand": "pnpm turbo build",
  "ignoreCommand": "pnpm dlx turbo-ignore"
}
```
