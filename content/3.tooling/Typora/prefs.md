---
title: Preferences
description: Typora Preferences

---

## Preferences

### Files

Online - Collapsible Outline on Left Panel
Save & Recover - Auto Save

### Editor

Indent Size: 4

### Appearance

Zoom: Use Ctrl-[Mouse Wheel] 
Status Bar: Show Status Bar

#### Advanced

Config File: `$HOME/.config/Typora/conf/conf.user.json`

```json
/** For advanced users. */
{
  "defaultFontFamily": {
    "standard": null, //String - Defaults to "Times New Roman".
    "serif": null, // String - Defaults to "Times New Roman".
    "sansSerif": null, // String - Defaults to "Arial".
    "monospace": null // String - Defaults to "Courier New".
  },
  "autoHideMenuBar": false, //Boolean - Auto hide the menu bar unless the `Alt` key is pressed. Default is false.

  // Array - Search Service user can access from context menu after a range of text is selected. Each item is formatted as [caption, url]
  "searchService": [
    ["Search with Google", "https://google.com/search?q=%s"]
  ],

  // Custom key binding, which will override the default ones.
  // see https://support.typora.io/Shortcut-Keys/#windows--linux for detail
  "keyBinding": {
    // for example: 
    // "Always on Top": "Ctrl+Shift+P"
    // All other options are the menu items 'text label' displayed from each typora menu
  },

  "monocolorEmoji": false, //default false. Only work for Windows
  "maxFetchCountOnFileList": 500,
  "flags": [] // default [], append Chrome launch flags, e.g: [["disable-gpu"], ["host-rules", "MAP * 127.0.0.1"]]
}
```
