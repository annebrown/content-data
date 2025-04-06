---
title: Fonts
description: Nuxt Fonts Module
navigation: false
lastModified: '2025-04-05'
---

## Description

Official Nuxt Fonts Module

## Install

```bash
pnpm dlx nuxi module add fonts
```

## Config

### .data

Add `.data` dir to project root, and `.gitignore`.

## Provider

Configure font provider in `nuxt.config.ts`:

```ts
    modules: [
        '@nuxt/fonts'
    ],
    fonts: {
        provider: 'google',
        families: {
            'Font Family Name': true
        }
    }
```

## Usage

Declare a font-family in CSS to use a font:

```css
some-element { font-family: Roboto, sans-serif; }
```

## Nuxt 3 Fonts

For more info see [Using Fonts in Nuxt 3](../../fonts.md).
