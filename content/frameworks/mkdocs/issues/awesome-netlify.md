---
title: awesome-pages
description: awesome-pages not deployed on Netlify
---

## Problem

mkdocs-awesome-pages-plugin works locally, but not on Netlify deployment.

## Status

SOLVED

## Solution

Problem was caused by an entry in `.gitignore`, preventing `.pages` from being commited.  