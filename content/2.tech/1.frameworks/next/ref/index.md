---
title: Next.js Ref
description: Next.js Ref Notes
---

## Description

{{ description}}

## File Stru

```txt
app/
    api/
        route.tsx
        db.tsx
    favicon.ico
    error.tsx
    global.css
    page.tsx           # Route: /
    layout.tsx
    docs/ # component
        error.tsx # docs errors
        layout.tsx # docs layout
        nav.tsx # docs nav
        page.tsx       # Route: /docs
        section1/
            page.tsx   # Route: /docs/section1
    
```

## Page

- route UI
 
## Layout

- Shared UI for folder and children
- Preserves state, remains interactive, does not rerender
- By default, layouts are nested. Eg, docs with custom sidebar and nav
- Only root layout can have <heml>and <body> elements.
- Layouts are Svr Components by default
- Can fetch data
- No passing data btw parent and child layout
- Don't have access to pathname.
- Don't have access to route segments below itself