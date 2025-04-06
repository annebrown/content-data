---
title: 'UNavigationMenu'
description: 'Vert or Horiz Links Menu'
lastModification: 2025-02-25
---

## Description

`UNavigationMenu` provides a horiz or vert links menu from a data array.

## Config

`UNavigationMenu` can be globally customized in `app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    navigationMenu: {
      variants: {
        // Base variants
      },
      compoundVariants: [
        // Hover && Inactive
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50 data-[state=open]:text-(--ui-text-highlighted)',
              'transition-colors before:transition-colors'
            ],
            linkLeadingIcon: [
              'group-hover:text-(--ui-text) group-data-[state=open]:text-(--ui-text)',
              'transition-colors'
            ]
          }
        }, // Hover
        //
        {
          color: 'primary',
          variant: 'pill',
          active: true,
          class: {
            link: 'text-(--ui-primary)',
            linkLeadingIcon: 'text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)'
          }
        }
        // Other compound variants
      ]
    }
  }
})
```

## Palette

Using secondary for link states:

```ts
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [
        // Hover && Inactive
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'hover:text-(--ui-secondary) hover:before:bg-(--ui-secondary)/10',
              'transition-colors before:transition-colors'
            ],
            linkLeadingIcon: [
              'group-hover:text-(--ui-secondary)',
              'transition-colors'
            ]
          }
        },
        // Active
        {
          color: 'primary',
          variant: 'pill',
          active: true,
          class: {
            link: 'text-(--ui-secondary)',
            linkLeadingIcon: 'text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)'
          }
        },
        // Focus
        {
          disabled: false,
          class: {
            link: 'focus-visible:before:ring-(--ui-secondary)'
          }
        }
      ]
    }
  }
})
```

## Example

Complete example from Nuxt 3 AI Service:

```ts
export default defineAppConfig({
  ui: {
    navigationMenu: {
      slots: {
        // Keep the default slots
        link: 'group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2'
      },
      variants: {
        color: {
          primary: {
            link: 'focus-visible:before:ring-(--ui-secondary)'
          }
        }
      },
      compoundVariants: [
        // Normal state
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: [
              'text-(--ui-text) hover:text-(--ui-secondary) hover:before:bg-(--ui-secondary)/10',
              'transition-colors before:transition-colors'
            ],
            linkLeadingIcon: [
              'text-(--ui-text-dimmed) group-hover:text-(--ui-secondary)',
              'transition-colors'
            ]
          }
        },
        // Active state
        {
          active: true,
          class: {
            link: 'text-(--ui-secondary)',
            linkLeadingIcon: 'text-(--ui-secondary)'
          }
        }
      ]
    }
  }
})
