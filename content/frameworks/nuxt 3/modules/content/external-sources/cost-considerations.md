---
title: Cost Considerations
description: Pricing and Performance
lastModified: '2025-01-10'
---

## Added Costs

Using or adding a remote content source won't significantly impact costs.

Pricing is based on BW, serverless function execution, and build minutes, rather than on the source of the content.

### Dev Builds

No extra costs for dev builds when using public repo for content.

### Prod Builds

### Build Time

Vercel fetches content from public repo during build process, so incurs no additional costs beyond normal Vercel build usage.

### Runtime

#### SSG

No additional costs at runtime.  Content fetched and built into static pages during build process.

#### SSR and ISR

Content fetched at runtime. Edge Network optimizes and caches content. Actual cost impact depends on usage patterns, like update freq and number of received requests.

Use caching strategies to minimize repeated requests to remove content source.
