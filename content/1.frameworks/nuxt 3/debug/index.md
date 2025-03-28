---
title: Debug
description: Debugging Nuxt Apps
navigation: false
lastModified: '2025-03-14'
---

## Issues

See [Nuxt Issues] for past problems and errors.

## Troubleshooting

If app is not behaving as expected, with no apparent cause, cleanup and reinstall:

```bash
rm -rf node_modules .nuxt pnpm-lock.yaml
pnpm i
```

As well, Nuxt provides several mechanism for detecting errors:
