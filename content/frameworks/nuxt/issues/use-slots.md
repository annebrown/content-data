---
title: Use Slots Error
description: Use slots with <ContentRenderer>
lastModified: '2025-01-08'
---

## Error Description

Nitro presents this message:

```yml
{
  "message": "You should use slots with <ContentRenderer>",
  "value": { ...
  },
  ...
}
```

when a markdown file under `/content` contains only frontmatter, but no body content.  For ex, when a dir has an index.md for a page that will be later populated with additional data, such as cards for sub-sections:

```md
---
title: Some Title
description: Some Description
---
```

To prevent this error yml code from rendering on the page, use `<contentRenderer>` like`/pages/[...slug].vue`:

```vue
<template>
  <article v-if="page">
    <h1>{{ page.title }}</h1>
    <p v-if="page.description">{{ page.description }}</p>
    <ContentRenderer v-if="page.body" :value="page">
      <template #empty>
        <p>Some content</p>
      </template>
    </ContentRenderer>
  </article>
</template>

<script lang="ts" setup>
const { path } = useRoute()
const { data: page } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
</script>
```
