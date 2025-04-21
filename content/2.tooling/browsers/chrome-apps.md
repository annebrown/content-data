---
title: Chrome Apps
lastModified: '2025-03-27'
---

## Description

Using Chrome apps in development.

## 'Not Secure' Panel

To maximize app size, eliminate the "Not Secure" banner for local network (http://) routes by configuring a whitelist at `chrome://flags/#unsafely-treat-insecure-origin-as-secure` like:

```text
192.168.5.555:3000, 192.168.5.555:3003, 192.168.5.555:5555
```
