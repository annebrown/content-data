---
title: Dynamic Markdown
description: Dynamic Frontmatter
lastModified: '2025-01-08'
---

## Description

Dynamic markdown frontmatter fields

## Purpose

Streamline content editing, while reducing potential for human error.

## Approach

These steps add a dynamic `lastModified` markdown frontmatter field.

### Install VS Code Extensions

Install `Run on Save` (I used `pucelle's`.  It worked, so didn't try other, simlarly named extensions) and  `Markdown All In One` VS Code extensions.

### Create Custom Script

Create script, `@/update-frontmatter.js`:

```ts
//<--------@/update-frontmatter.ts--------------------------------------------->
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const currentDate = new Date().toISOString().split('T')[0];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(/lastModified: '.*'/, `lastModified: '${currentDate}'`);

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Updated lastModified date to ${currentDate} in ${filePath}`);
  });
});
//<--------@/update-frontmatter.ts--------------------------------------------->
```

### Config VS Code Tasks

Create a task, `@/.vscode/tasks.json`, to run the script on save:

```json
{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "Update Frontmatter",
        "type": "shell",
        "command": "node",
        "args": [
          "${workspaceFolder}/update-frontmatter.js",
          "${file}"
        ],
        "problemMatcher": [],
        "isBackground": true
      }
    ]
}
```

### Config VS Code Settings

Add to `@/.vscode/settings.json`:

```json

"editor.codeActionsOnSave": {
    "source.fixAll": true
 },
"files.autoSave": "onWindowChange",
"files.autoSaveDelay": 1000,
"files.associations": {
	"*.md": "markdown"
},
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true
},
"files.trimTrailingWhitespace": true,
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"files.autoGuessEncoding": true,
"files.defaultLanguage": "markdown",
"files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true
},
"runOnSave.commands": [
    {
    "match": "\\.md$",
    "command": "node ${workspaceFolder}/update-frontmatter.js ${file}"
    }
],
```
