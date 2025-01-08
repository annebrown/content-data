---
title: Public
description:  Technology Development Docs
navigation: false
lastModified: '2025-01-08'
---

## Description

Headless, framework-agnostic data source, for use in prototyping and testing.

Also used for capture, storage and access to non-sensitive technology development docs and data.

Dynamic frontmatter fields to promote consistency, improve CMS maint, streamline content editing and reduce human error. Ex:

`lastModified: 'YYYY-MM-DD` frontmatter field - dynamimcally updated on explicit save

> NOTE: explicit save, `Ctrl-S`, is required.  Auto-save (like focus change) does not trigger this action.

## Design Considerations

Project templates `@/templates` hold the docs (single source of truth) for client app design considerations.

## Repo

Public GitHub Repo: [content-data](https://github.com/annebrown/content-data.git)

##  Web-Based CMS Clients

Public CMS clients apps:

[https://docs.annebrown.ca](https://docs.annebrown.ca)

[https://www.browndomain.com/public](https://www.browndomain.com/public)

[https://gamma.annebrown.ca/public](https://gamma.annebrown.ca/docs)

[https://misscommunication.ca/public](https://misscommunication.ca/public)

## Electron CMS Client

Pubilc Electron app - prototype stage.  Not yet suitable for open-source
