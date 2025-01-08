---
title: Failed to Sstringify
description: Failed to stringify de server logs
lastModified: '2025-01-08'
---

## Error

 Nuxt dev server warning:

 ```log
 WARN  [nuxt] Failed to stringify dev server logs. Received DevalueError: Cannot stringify a function. You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.
 ```

 ## Cause

 Nuxt tries to stringify a complex object or function using standard JSON serialization, during Nuxt's dev server log serialization process.

 ## Try Lazy Loading

Use useLazyAsyncData to handle data reactively, to mitigate serialization issues.

`useLazyAsyncData` is a wrapper for `useAsyncData`, that triggers data fetching wo blocking navi.  It allows navi to occur b4 finishing asynch data fetching.

Imporves user experience w faster navi, esp for data not immediately necessary for the initial render, such as a large, collapsable navi tree.

W useLazy, pending and error states need to be handled in the same component template.

## Solution

'useAsyncData'/`useLazyAsyncData`

## Status

SOLVED, CLOSED
