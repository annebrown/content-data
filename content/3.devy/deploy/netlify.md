---
title: Deploy - Netlify
description: Projects deployed to  [Netlify](https://app.netlify.com/ "Official Site")
tags:
  - Netlify
---

## Description

{{ description }}

## Deployments

[https://docs.annebrown.ca](https://docs.annebrown.ca "This Site") - MkDocs SSG

[https://www.browndomain.com](https://www.annebrown.ca "Authentication Required") - Angular Full-Stack

## Netlify CLI

### Install

Install Globally:

```bash
npm install netlify-cli -g
```

For Continuous Integration, install from project root dir:

```bash
cd [path/to/proj]
npm install netlify-cli --save-dev
```




Check version and data:

```bash
netlify
```

### Obtain Netlify Access Token

```bash 
netlify login
```

Access token is stored in the Netlify global config file:

```bash
~/.config/netlify/config.json
```

### Disable usage data collection:

```bash
netlify --telemetry-disable
```

