---
title: useRouter()
description: useRouter() Composable
lastModified: '2025-01-28'
navigation: false
---

## Description

- Used to retrieve route meta
- Returns current route object
- Reactive - updates automatically on route change

## Usage

`useRouter()`

- Composable to obtain `router` object (router instance)
- Returns router instance, with navi methods
- Used to control navi and routing

`useRoute()`

- Composable to obtain current route meta
- Returns reactive object that updates when route changes

## Example

Determine whether a route has children:

```ts
const router = useRouter()
const route = useRoute()

const configuredRoute = router.getRoutes().find((r) => r.name === route.name)
const hasChildren = configuredRoute?.children && configuredRoute.children.length > 0
```


`configuredRoute`

- Contains found route object if match, or undef

`getRoutes()`

- returns full list of all route recs

`find()`

- Method to search for specific route on the array of routes

`(r) => r.name === route.name`

- Search condition - look for route whose name matches hat of current route
