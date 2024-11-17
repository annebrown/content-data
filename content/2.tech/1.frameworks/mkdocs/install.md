---
title: Install
description: Install and run MkDocs
---

## Description

{{ description }}

## Create venv

When a Python Virtual Env is activated for a proj, `pip` will install all the constricting snake stuff into `[project_dir]/.venv`. This isolates the proj with its own specific Python interpreter, and software libs and binaries.

Create `.venv` under proj dir:

```bash
cd [proj-dir]
python3 -m venv .venv
```

## Activate venv

Activate Python virtual env:

```bash
source .venv/bin/activate
```
`pip` will now install every Python pkg into `./.venv` until venv is deactivated or terminal is closed.

## Add Shortcut to `.bash_aliases`

```bash
alias activate-venv="source ./.venv/bin/activate"
```

## Install MkDocs

Install MkDocs, plus its plugins, themes and extensions:

```bash
pip isntall mkdocs
pip install mkdocs-material
pip install mkdocs-git-revision-date-localized-plugin
 ...

```
