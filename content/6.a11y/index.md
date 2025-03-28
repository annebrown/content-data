---
title: Accessability
description: 'A11y Design and Development'
navigation: false
lastModified: '2025-03-27'
---

## alt

- Used specifically for images
- Provides alternative text that describes the image if it cannot be rendered
- Used for SEO
- Read by screen readers to describe the image to visually impaired users
- Should describe the image if it contains info
- Should describe the link target if used within a link element
- Use `alt=""` if the image is decorative

## aria-label

- General attrib for use by any element
- In the absence of visible text, provides accessible names for interactive elements
- For example, ensure screen reader users understand what will happen when they activate a button or toggle:

```html
{% raw %}
<!-- Nuxt/ui Button Component -->
<UButton
    :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="isDark = !isDark"
/>
{% endraw %}
```

## Loading Feedback

Use skeleton UI elements that get replaced once a third-party script (like video embed or payment modal) loads, thus reducing visual noise and improving performance.

`a11y` feedback is rqd to inform the user when the script is loading or on failure to load.

### Load Failed Alert

```vue
<ComplicatedComponent>
    <template #error>
        <Alert
            color="red"
            title="ComplicatedComponent to load"
            description="Refresh page to try again."
        />
    </template>
</ComplicatedComponent>
```

### Loading Indication

```vue
<ComplicatedComponent>
    <template #loading>
        <ScriptLoadingIndicator />
    </template>
</ComplicatedComponent>
```
