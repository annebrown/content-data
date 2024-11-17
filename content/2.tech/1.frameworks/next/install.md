---
title: Getting Started
description: Install or Clone Next.js App and Run Dev Svr
tags:
  - Next.js
---

## Description 

{{ description }}

## Create Next.js App

Next.js is installed as an app:

```bash
npx create-next-app@latest
? What is your project named? apex
? Would you like to use TypeScript? Y
? Would you like to use ESLint? y
? Would you like to use Tailwind CSS? y
? Would you like to use src directory? n
? Would you like to use App Router? y
? Would you like to customize the default import alias (@/*)? n
Creating a new Next.js app in /home/anne/projects/apex.

...

npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm WARN deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead

added 362 packages, and audited 363 packages in 51s

136 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created apex at /home/anne/prod/apex
```

Ignoring the deprecated deps for now because, according to DevCodeF1.com Editors, theses msgs are not specific to Next.js and can be safely ignored?

## Clone Existing App

```bash
git clone [git-repo-url]
cd [git-repo]
npm install
npm install next@latest react@latest react-dom@latest
```

Cloning and installing also throws deprecated deps msgs.

## Run Dev Svr

```bash
npm run dev  # URL: http://localhost:3000
```

## First Impressions

Next.js site up and running on dev server with two commands.  Next.js and React have totes excellent documentation.  Customization and deploy to Vercel with custom domain, is extrememly rapid and flawless.  LAMP this is not.
