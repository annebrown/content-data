---
title: Python
description: Programming Language
---

## Description

My notes on Python {{ description }}

## Install

Add Python PPA:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```

This also outputs a list of the latest Python versions for each distro.

Update local PPA cache:

```bash
sudo apt update
```
Install selected version:
 
```bash
sudo apt-get install python3.12 python3-pip
```

## Virtual Environment

Some [Python](https://www.python.org/ "Official Site")-based projects require a virtual env.

When a venv is activated for a proj, `pip` will install all pkgs in `[project_dir]/.venv`. This isolates the proj with its own specific Python interpreter, and software libs and binaries.

## Create venv

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
`pip` will now install every Python pkg into `./.venv` until venv is deactivated (`exit` or Ctrl-C or close terminal).  

A project's venv must be re-activated (`source .venv/bin/activate`) to install more pkgs or run services.

## Add Shortcut to `.bash_aliases`

```bash
alias activate-venv="source ./.venv/bin/activate"
```

## List Installed venv Pkgs

To list installed pkgs while venv is activated: 

```bash
pip list
```