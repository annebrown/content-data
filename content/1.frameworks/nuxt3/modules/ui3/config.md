---
title: 'Config'
description: 'NuxtUI Config'
lastModification: 2025-02-25
---

## Description

Components use the Tailwind Variants API for styling, which is configured through the `app.config.ts` file, not in CSS:

```ts
export default defineAppConfig({
    ui: {
        // Color aliases
        colors: {
            primary: 'blue',
            secondary: 'green',
            success: 'green',
            warning: 'yellow',
            error: 'red',
            gray: 'cool',
            neutral: 'zinc'
        },
        // Components
        button: {
            slots: {
                base: 'group font-bold',
                trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
            },
            defaultVariants: {
                color: 'neutral',
                variant: 'subtle'
            }
        },
        // Component customizations
        badge: {
            slots: {
                base: 'font-medium inline-flex items-center',
                label: 'truncate'
            },
            defaultVariants: {
                size: 'md',
                color: 'primary',
                variant: 'solid'
            }
        }
    }
})
```
