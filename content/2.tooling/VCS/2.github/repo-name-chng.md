---
title: Repo Name Change
description: How to Change Repo Name
lastModified: '2025-03-31'
---

## GitHub Repo

GH repo name can only be modified from GH platform.

## Local Repo

After changing the GitHub repo name online, change the remote URL stored in the local Git config:

```bash
git config remote.origin.url <new_github_repo_url>
```

## Verify Remote URL

```bash
git remote -v
```
