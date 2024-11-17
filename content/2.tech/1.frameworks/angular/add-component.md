---
title: App Component
description: Angular App Component
---

## Description

{{ description }}

Angular apps are single page.  When different content is requested, the browser only renders the part of the page that is required.  This can reduce traffic and increase responsiveness.

## Adding Components

One way to add content is to add a component.  

To add a new component:

```bash
ng generate component new # Angular is a gen ng
CREATE src/app/two/two.component.css (0 bytes)
CREATE src/app/two/two.component.html (18 bytes)
CREATE src/app/two/two.component.spec.ts (571 bytes)
CREATE src/app/two/two.component.ts (222 bytes)
```

A component has its own logic and inner-connent, and, optionally style, and unit tests.
