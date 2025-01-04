---
title: Practicalities
description: Considerations for Stand-Alone App Dev
---

Things to consider when developing stand-alone apps.

Keyboard Shortcuts

When designing an app that presents a panel with keyboard shortcuts, clicking on the Electron app window (or any other window) will steal the focus from the desired target app.  If the desired app window does not have the focus, it cannot receive any input, including keyboard shortcuts.  

Clipboard

A `ctrl-V` button click does not implicitly cause a "paste" action.   The keyboard library's send_shortcut function is meant to simulate key presses, not directly manipulate the system clipboard.  The clipboard is handled by the OS, and is not usually something that applications can directly access or modify.


