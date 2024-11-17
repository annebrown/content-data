---
title: Initial File Structure
description: Initial TailNext File Structure
---

## Description

{{ description }}

Ref: TailNext [README.md](https://github.com/onwidget/tailnext).

```
/
├── .storybook/
├── app/
│   ├── (blog)
│   │   ├── [slug]
|   |   |   └── page.js
|   |   └── blog
|   |       └── page.js
│   ├── head.js
│   ├── layout.js
│   └── page.js
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   │── content/
│   |   └── blog/
│   |       ├── demo-post-1.md
│   |       └── ...
│   ├── stories/
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```
