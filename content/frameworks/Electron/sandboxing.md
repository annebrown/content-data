---
title: Sandboxing
description: Security Model
lastModified: '2025-01-08'
---

## Description

Electron uses the Chromium engine for most of its core functionality.  It therefore, inherits Chrome's sandbox security model.  Specifically, electron uses the chrome-sandbox for its render process.  chrome-sandbox restricts access to system resources and helps to prevent malicious code from harming the host OS.

## setuid Bit

chrome-sandbox requires special root permissions, or Electron will refuse to run and will exit with a SIGTRAP error. See [Sandboxing Issue](/public/frameworks/electron/issues/sandboxing) for instructions on how to set the correct file permissions for the chrome-sandbox binary.
