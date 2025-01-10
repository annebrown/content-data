---
title: 'Shared Assets'
description: 'App Asset Sharing'
lastModified: '2025-01-09'
---

## Description

Centralized asset mgmt for multiple projects (like fleet.css)

## Purpose

Sharing assets among similary focused apps, streamlines updates and maint actions, promotes consistency and predictability and can be used to perfect a specific style.

## Design Considerations

A change in one file (like an error fix), necessitates modifications across all of the other projects implementing that asset.

## Approaches

## Manual

On change, manully edit files in each project.

### Pros

Simplest method for two projects

Offers best security coverage for asset storage and maint

### Cons

Repetitive actions limit it scalablily to two or three projects

## Public

Make publically accessible

### Pros

Promotes open-source movement

Easiest and fastest to implement

### Cons

Security and intellectual property concerns

## Authenticated Imports

Access priv, published assets (like npm or GH) using custom back-end code for app to act as proxy betw client and asset.

Use API endpoint to take asset requests, provide authn to private asset store, then send asset, with dynamically constructed asset URL (w token) to requesting client software.

Client asset request code example:

```html
<img src="/api/fleet-assets/path-to/some-image.jpg" />
```

### Pros

Authn

Flexible

### Cons

Added complexity

Larger codebase w custom coding for api endpoint

Proxy actions can impact response performance.


## Monorepo

Use a single, centralized repo, for all related projects and assets.

A monorepo is not a protocol or framework or a git feature, although git serves as the foundation for its architecture.  It is an apporach that emerged from Google and FB, and then adopted by the chieftains, (FB, Google & MS).

### Pros

Facilitates collab

Simplified dep mgmt

Efficient assets sharing

Well suited for large, complex projects with complex collab rqmts

Good starting point (shared assets) for learning about and analyzing monorepos

### Cons

V careful, complex planning rqd for code maint, and to avoid build performance and DX efficiency issues.

Additional complexity of concerns like security, esp authz, with collab.

It's list of complexities is, itself, complex.

## Nuxt Layers

The Nuxt framework has a Layers mechanism, whereby default configs and assets are shared across projects.

> At this time (see last modification date, under title), I have not yet investigated other frameworks for similar functionality.

Nuxt's built-in security features support env var authn.

### Pros

Powerful features, out-of-the-box

Familiarity

Rapid implementation

Built-in intellectual property protection via npm or git authenticated imports.

### Cons

Not as simple as `Public`
