---
title: Page Meta
description: Display Page Meta
lastModified: '2025-01-08'
---

Discover available markdown page meta using something like:

```vue
<!--------@/components/..../debug/ShowPageMeta.vue----------------------------->
<script setup>
const route = useRoute()
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () =>
  queryContent(path).findOne()
)
</script>

<template><div>

<article v-if="page">
    <p>{{ page.title }} meta: {{ page }}</p>
</article>

</div></template>
<!--------@/components/..../debug/ShowPageMeta.vue----------------------------->
```

## Sample Page Meta

Sample markdown page data:

```yml
{
    "_path": "/docs-pub",
    "_dir": "",
    "_draft": false,
    "_partial": false,
    "_locale": "",
    "title": "Public",
    "description": "Technology Development Docs",
    "navigation": false,
    "lastModified": "2025-01-07",
    "body": {
        "type": "root",
        "children": [
            {
                "type": "element",
                "tag": "h2",
                "props": { "id": "purpose" },
                "children": [ {
                    "type": "text",
                    "value": "Purpose"
                } ]
            },

            {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                    {
                        "type": "text",
                        "value": "Framework-agnostic data source for use in prototyping and testing."
                    }
                ]
            },
            {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                    {
                        "type": "text",
                        "value": "For capture, storage and access to non-sensitive technology development docs and data"
                    }
                ]
            }
        ],
        "toc": {
            "title": "",
            "searchDepth": 2,
            "depth": 2,
            "links": [
                { "id": "purpose",
                    "depth": 2,
                    "text": "Purpose"
                }
            ]
        }
    },
    "_type": "markdown",
    "_id": "github:docs-pub:index.md",
    "_source": "github",
    "_file": "docs-pub/index.md",
    "_stem": "docs-pub/index",
    "_extension": "md"
}
```
