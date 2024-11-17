---
title: Setup
description: Clone and Setup TailNext Project
---

## Description

{{ description }}

## Clone Repo

```bash
git clone https://github.com/onwidget/tailnext.git
```

## Install Deps

```bash
cd [path-to]/tailnext
npm install
```

## Install Storybook

See [Storybook](../../../tech/apps/storybook/index.md).

After intallation, Story will automatically launch, and pop-up a tutorial window.

## Launch Storybook

To launch manually:

```bash
npm run storybook
```

## Next.js Storybook Integration 

To integrate Story with the Next.js framework, see [Storybook Integration](../../../tech/frameworks/next/storybook-for-next.md).

## Create Project Shortcuts
 
 Add to `.bash_aliases`:

```sh
#--------------------------------------------------
# TailNext Project - www.browndomain.com Prototype
#--------------------------------------------------
alias gotn="cd ~/projects/next.js/tailnext" 
alias codetn="gotn && code .&" # VSCode w Next.js theme
alias tnserver="gotn && npm run dev"
# Launch Next.js server in separate process w Next.js theme
alias tnservert="gotn && konsole --profile Next.js&" 
alias tnstorybook="gotn && npm run storybook"
```


