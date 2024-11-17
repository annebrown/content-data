---
title: Data Fetching
description: Fetching Customizations
---

## Description

{{ description }}

## Intro

Next.js prefetches all pages by default. This behavior can be customized, based on performance and loading rqmts.

### `fetch` - Svr

- extends native fetch web API 
- caching and revalidating for svr requests
- async / await in svr components

### 3rd-Party Libs - Svr

- config for caching and revalidating of requests
- for libs that don't support or expose `fetch` (e.g., db, CMS client)
- uses Route Segment Config OPtion and React's cache function

### Route Handler - Client

- fetch data in a client component
- executes on svr and returns data to client
- useful to not expose sensitive info to client, (e.g., API token)

### 3rd-Party - Client

- fetch client data using SWR and React Query
- APIs for memorizing requests, caching, revalidating and mutating data.

## Requesting Data

### Client-Side

Next.js integrates w libs like fetch and axios for API requests from browser

### Svr-Side

getStaticProps and getServerSideProps allow fetching svr data before pages is rendered, providing personalized, dynamic content

### getStaticProps

- fetches at build time for SSG
- faster loading

## getServerSideProps

- fetches on request for SSR
- more dynamic, but adds perf overhead

## Revalidating

- purging cache and fetching latest
- time-based or on-demand
