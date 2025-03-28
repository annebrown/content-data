---
title: Fetched Data Momentarily Rendered
description: Nuxt Table Data Renders then Vanishes
lastModified: '2025-03-19'
---

## Description

For a table in a Nuxt3 page component, a composable is invoked to fetch data from a remote private GH repo.  The expected fetched data renders briefly, then disappears.

## Cause

When initially loading the page, Nuxt 3 performs SSR, during which, the `useGitHubIssues` composable is executed on the server.

The GitHub API call successfully fetches the data and the fetched data is included in the server-rendered HTML.

Next, the server sends the generated HTML to the browser, with which Nuxt 3 hydrates the client-Side and makes the fetched data reactive.

During hydration, `useGitHubIssues` is executed again, on the client-side, and triggers the composable's debug message "GitHub token not found" to be rendered on the client-side.

The potentially sensitive data stored in the `.env` file is only available during build time, and never on the client.

Moving the token retrieval and data fetching logic into a server-conditional code block solved the problem of the client-side replacing the expected table data with an empty array or undef.
