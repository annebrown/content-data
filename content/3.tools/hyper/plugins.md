---
title: Hyper Plugins
description: All About Hyper Plugins
---

## Description

{{ description }}

## Installed Plugins

List installed plugins:

```bash
hyper list # or ls
```

## Discover Plugins

List avail npm plugins:

```bash
hyper list-remote # or lsr or ls-remote
```

For more info on a plugin, search [the-plugin-name] on [npm](https://www.npmjs.com/).

Also visit [awsome-hyper](https://github.com/bnb/awesome-hyper), for a curated list of plugins, themes and resources.

## Install Plugin

```bash
hyper i [the-plugin-name]  # i is for install, not the digit
```

## Delete Plugin

```bash
hyper u # or rm or remove or uninstall # : )
```

## Plugins

For probs, read npm deets.  As well, some plugins are not avail on linux.

### hyperborder 

Match & nicely contrast w my vscode config

### hyper-transparent-vibrancy

Add AFTER theme plugin if exists:

```json
	"hyperTransparentVibrancy": {
		alpha: 0.5, // default 50%
		vibrancy: 'dark'
	},
  },
```

Add to 'plugins: [`:
```bash
    "hyper-snazzy",
    "hyper-transparent-vibrancy",
  ],
```

hyper-statusline-extended

NOT
hyper-transparent-bg 
