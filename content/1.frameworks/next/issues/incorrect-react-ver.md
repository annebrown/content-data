---
title: Incorrect React Version
description: Next.js dev server returns error 
tags:
    - Issues
    - SOLVED
---

## Description 

{{ description }}

Next.js install script, `create-next-app`, returns error when attempting to run dev svr:

```bash
npm run dev
Error: Next.js requires react >= 19.0.0 to be installed.
```

### Fix

The app is asking for a React version that doesn't exist.  `create-next-app` authors over-anticipated the version 19 release date?  

Solution : Install Release Candidate (RC):

```bash
npm install --save-exact react@rc react-dom@rc
```

### Status 

STATUS: RESOLVED