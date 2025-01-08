---
title: Konsole
description: KDE Terminal Emulator
navigation: false
lastModified: '2025-01-08'
---

## Useful Shortcuts

Split right -  `Ctrl-Shift-(`


Split up    - `Ctrl-Shift-[`


## Config File

Konsole profiles and bookmarks are located here:

```~/.local/share/konsole```

Example:

```bash
angular.profile
nuxt.profile
bookmarks.xml
```

Use [dotfiles](../../../dev/projects/index.md) to store Konsole config.

## Create New Profile

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

MkDocs - docs-pub

#### GUI

General:

- Name: docserver
- Command: mkdocs serve
- Initial dir: ~/prod/docs-pub

Tabs:

- Tab title format: MkDocs

Appearance:

- Something different

#### konsolerc
