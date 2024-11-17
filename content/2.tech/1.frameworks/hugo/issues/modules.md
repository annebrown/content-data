---
title: Failed to load modules
description: Hugo Modules not found
---

## Description

{{ description }}

## Status

SOLVED

## Problem

Build throws:

 `Error: failed to load modules: module "github.com/[some-git-acct]/[some-module]: not found in ...`

## Solution

Import the missing module by adding an entry to `hugo.yaml` [ |`hugo.toml`|`hugo.json` ]:

```yaml
module:
  imports:
    - path: github.com/[some-git-acct]/[some-module]
```

and

> Is this step necessary? Shouldn't conf.yaml handle the rest?  Verify if revisiting Hugo.

```bash
 cd [path-to-proj]/github.com/
 mkdir [some-git-user]
 cd [some-git-user]
 git clone https://github.com/[some-git-user]/[some-module]
```

