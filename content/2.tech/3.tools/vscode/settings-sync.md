---
title: Settings Sync
description: Syncs VSCODE Config Settings Across Dev Envs
---

## Description

{{ description }}:

  - Extensions Settings
  - Keyboard Shortcuts
  - Profiles
  - User Settings
  - User Snippets
  - UI State
  - User Tags

## Settings Files

Alphabetizing facilitates mods and reduces dups.  

  - User Settings: `~/.config/Code/User/settigns.json`
  - User Snippets: `~/.config/Code/User/snippets`

## Using .dotfiles

To ease VSCode config for new dev envs, .dotfiles could be used instead of VSCode's built-in settings sync.

See [New Dev Env](../../oses/linux/new-dev-env.md) and the [Dotfiles Project](../../../dev/projects/dotfiles/index.md).  

Move Settings Files to .dotfiles:

```bash
mv ~/.config/Code/User/settings.json ~/.dotfiles/code/.config/Code/User/settings.json
mv ~/.config/Code/User/snippets/ ~./dotfiles/code/.config/Code/User/snippets
```

Link to .dotfiles

```bash
cd ~/.dotfiles
stow code
```

Resulting Links:

| Link | Tarket |
| :--- | :----- |
| `~/.config/Code/User/settings.json` | `~/.dotfiles/code/.config/Code/User/settings.json` |
| `~/.config/Code/User/snippets/`     | `~./dotfiles/code/.config/Code/User/snippets/`      |
