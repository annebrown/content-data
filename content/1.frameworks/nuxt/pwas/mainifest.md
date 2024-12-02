---
title: Manifest
description: PWA Manifest
---

## Add a Manifest

Install `@vite-pwa/nuxt` Module

```bash
pnpm i @vite-pwa/nuxt
```

Add to `nuxt-config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate'
    manifest: {
      name: 'PWA Name',
      short_name: 'PWA Short Name',
      description: 'PWA Description,
      theme_color: '#0891b2,
      lang: 'en',
      icons: [
        {
          src: 'logo.png',
          sizes: '48x48',
          type: 'image/png',
        },
      ]
    }
  }
})
```

Add to `app.vue`:

```vue
    <NuxtPwaManifest/>
    <NuxtPage/>
```

### Window Controls Overlay

```json
"display_override": ["window-controls-overlay"]
```
