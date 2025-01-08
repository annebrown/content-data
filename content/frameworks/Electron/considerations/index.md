---
title: Considerations
description: Stand-Alone App Dev
lastModified: '2025-01-08'
---

Things to consider when developing stand-alone apps.

## Keyboard Shortcuts

When designing an app that presents a panel with keyboard shortcuts, clicking on the Electron app window (or any other window) will steal the focus from the desired target app.  If the desired app window does not have the focus, it cannot receive any input, including keyboard shortcuts.

## Clipboard

A `ctrl-V` button click does not implicitly cause a "paste" action.   The keyboard library's send_shortcut function is meant to simulate key presses, not directly manipulate the system clipboard.  The clipboard is handled by the OS and is not accessible to apps.
