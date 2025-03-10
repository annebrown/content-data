---
title: Nuxt Navi
description: Methods of Obtaining Navi Links
lastModified: '2025-01-08'
---

## Immediate Children of Specific Path

Regexp excludes parent dir and nested subdirs:

```regexp
'^/some-path/[^/]+$'
```

## Child Links of Any Directory

```js
<template>
<ContentList path="/tech/frameworks" v-slot="{ list }">
    <div v-for="item in list" :key="item._path">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    </div>
</ContentList>
</template>
```

## Top Links

```js
<template>
   <ContentNavigation v-slot="{ navigation }">
    <ul>
    <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
    </li>
    </ul>
</ContentNavigation>
</template>
```

## Top Links and Children

```js
<template>
 <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
            <p class="text-cyan-500">Parent</p>
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          <ul v-if="link.children">
            <p>Children</p>
            <li v-for="childLink of link.children" :key="childLink._path">
              <NuxtLink :to="childLink._path">{{ childLink.title }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
</template>
```

## Reverse Order

`slice()` copies navi array, because reverse() modifies original array order.

```js
<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation.slice().reverse()" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
```
