---
title: awesome-pages not deployed on Netlify
description: mkdocs-awesome-pages-plugin works locally, but not on Netlify deployment.
tags:
    - Issues
    - MkDocs
    - awesome-pages
    - mkdocs-awesome-pages-plugin
    - navigation.tabs
    - SOLVED
---

## Description

{{ description }}

## Status

SOLVED

## Solution

Problem was caused by an entry in `.gitignore`, preventing `.pages` from being commited.  Removed errant line and Hazzah!
