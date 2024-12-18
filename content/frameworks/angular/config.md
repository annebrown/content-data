---
title: Config
description: Angular App Config
---

`angular.json`:

```json
{
    "projects": {
        "angular-base": {
            "architect": {
                "serve": {
                    "options": {
                        "browserTarget": "your-project-name:build",
                        "host": "192.168.22.222" // Dev Svr IP
                        "port": 3002 // Dev Svr Port
                    },
..
```
