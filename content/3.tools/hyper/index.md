---
title: Hyper
description: Terminal Emulator
tags:
  - Hyper
---

## Description

Highly Customizable {{ description }}

## Useful Shortcuts

`Ctrl-Shift (` - Split right

## Config File

Konsole profiles and bookmarks are located here:

```~/.local/share/konsole```

Use [dotfiles](../../../dev/projects/index.md) to store Konsole config.

## Create New Profile

Download approp icon, ex: Mkdocs icon, for use in new profile.

Create new profile:

`Menu > Settings > Manage Profiles`, then `New`

Configure profile.  See [Profiles](#profiles) for examples.

Add alias for new profile to `.bash_aliases`:

```bash
alias [the-profile-name]="konsole --profile [the-profile-name]&"
```

Example:

```bash
alias docserver = "konsole --profile docserver&"
```

Review, then test:

```bash
alias | grep [the-profile-name]
[the-alias-name]
```

## Profiles

### docserver 

MkDocs - docs-pub (docs.annebrown.ca)

#### GUI

General:

- Name: docserver
- Command: mkdocs serve
- Initial dir: ~/prod/docs-pub

Tabs:

- Tab title format: MkDocs - docs.annebrown.ca

Appearance: 

- Something different

<div class="ab-buttons">
    <div class="item-00 box1"><a href="install/"><p>Install</p></a></div>
    <div class="item-00 box1"><a href="config/"><p>Config</p></a></div>
    <div class="item-00 box1"><a href="plugins/"><p>Plugins</p></a></div>
</div>
