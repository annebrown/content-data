---
title: Env Vars
description: Vite Env Var Handling
---

Ref: [Vite Docs](https://vite.dev/guide/env-and-mode.html)

## Sources

Vite uses [dotenv](https://github.com/motdotla/dotenv) to load env vars from `.env` files.

As well, env vars may already be present in an app env prior to executing Vite.

## Security

While Vite will not pass env vars to client code, sensitive vars must also be excluded from version control.  

## Priority

Vars that exist prior to Vite (build) execution have highest priority and will not be overridden by `.env` files.

Specificity takes precedence over generic.  `.env.production` is higher priority then `.env`.

## Usage

Loaded `.env`s are exposed to Vite-processed **client** source code, using the `import.meta.env` object, as strings, including numbers and booleans.

Since `.env`s are loaded at the start of Vite, changes require a server restart to take effect.

## Exposure

Only `VITE_`-prefixed env vars are exposed to Vite-processed **client** source code.

## Escaping

Escape `$`s with `/`.