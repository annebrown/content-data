---
title: Props
description: Nuxt Props
order: 10
lastModified: '2025-01-08'
---

## Props & Properties

### Props

Props, in Vue.js and Nuxt, are a way to pass data from a parent component to a child component.  They are custom attributes that can be registerd on a component.

Props can be defined for use in a child component, `@/components/some-path/ChildComponent.vue`, using the `defineProps`, a compile-time macro that is only available inside `<script setup>`:

```vue
<script setup>
    // Props the component expects to receive from its parent component.
    defineProps(['title', 'description'])
</script>
<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>
```

and passed from a parent component:

```vue
<template>
  <div>

    <SomePathChildComponent
      title="Welcome to Nuxt"
      description="A Vue framework for building modern web applications"
    />

  </div>
</template>
```

## Properties

Properties, a more general term, can include props, as well as other attributes of components or objects.  In JavaScript, properties referes to attrs of an object:

```ts
const obj={
    title="Frameworks",
    description="Technology Development Frameworks"
}
```
