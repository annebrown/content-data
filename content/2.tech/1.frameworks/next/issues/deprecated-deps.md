---
title: New App has Deprecated Deps
description: Create (or Clone and Install) Throws Deprecated Deps Errors
tags:
  - Issues
  - SOLVED
---

## Description

{{ description }}

## Errors

`npx create-next-app@latest` and clone plus `npm install` generates errors like:

```bash
npx create
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated rimraf@2.6.3: Rimraf versions prior to v4 are no longer supported
```

## STATUS

SOLVED? According to [DevCodeF1.com Editors](https://devcodef1.com/news/1339146/next-js-app-deprecated-inflight-1-0-6-messages), theses msgs are not specific to Next.js and can be safely ignored?
