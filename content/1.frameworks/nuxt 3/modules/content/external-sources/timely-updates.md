---
title: Timely Updates
description: Propagating Timely Updates
lastModified: '2025-01-11'
---

## Description

To publish changes, each client (built using this remote source) must be redeployed on the cloud-provider host, with no cache.

To automate and streamline change proagation, a [GitHub webhook](../../../../../devy/tooling/2.github/webhooks) configures the repo to watch for specific events (e.g., pushes, PRs, specific mods, etc), then notify client apps, so they, can act on those triggers.
