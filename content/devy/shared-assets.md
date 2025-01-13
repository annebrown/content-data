---
title: 'Shared Assets'
description: 'App Asset Sharing'
lastModified: '2025-01-13'
---

## Description

Centralized config and asset (eg, `@@/base/app.config.ts`, `@@/base/style/css/fleet.css` and `@@/base/components/Fleet/Toc.vue`) mgmt for multiple, related projects

## Purpose

Sharing assets among similary focused apps, streamlines updates and maint actions, promotes consistency and predictability and can be used to perfect a specific style.

## Design Considerations

A change in one file (like an error fix), necessitates modifications across all of the other projects implementing that asset.

## Approaches

## Manual

On change, manully edit files in each project.

### Pros

Simplest method for two projects sharing assets.

Security coverage for asset storage and maint

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
<img src="/api/fleet-assets/images/logos/path-to/some-image.jpg" />
```

### Pros

Authn

Flexible

### Cons

Added complexity

Custom coding for api endpoint

Proxy actions can impact response performance.


## Monorepo

Single, centralized repo, for all projectss sharing assets.

Apps are independently deployed, so not tied to the same domain name or same production host.

Must structure shared code and apps to avoid tight coupling betw projs, thus preserving modularity.

> A monorepo is not a protocol or framework or a git feature, although git serves as the foundation for its architecture.  It is an apporach that emerged from Google and FB, and then adopted by the chieftains, (FB, Google & MS).

### Pros

Facilitates collab

Simplified dep mgmt

Efficient assets sharing

Well suited for large, complex projects with complex collab rqmts

Great for solo developers.


### Cons

Careful planning rqd to avoid build performance and DX efficiency issues.

Additional complexity of concerns like security, esp authz, with collab.

Repo must be either public or private, which is not useful if you want to share some code for open-source, but keep some code private.

Larger builds and increased deployments could increase hosting usage.

It's list of complexities is, itself, complex.

## Nuxt Layers

The Nuxt framework has a Layers mechanism, whereby default configs and assets are shared across projects.  It supports monorepo or imports capabilities, as listed above, plus additional features and conveniences, like auto-imports.

> At this time (Last modification date located below title), I have not yet investigated other frameworks for similar functionality.

### Pros

Powerful features, out-of-the-box

Rapid implementation

Built-in intellectual property protection via co-located assets or npm or git authenticated imports.  Nuxt supports token, env var, for authn.

### Cons

Token authn is not secure enough for protection of IP assets.

Not as simple as `Public`.

Repo must be either public or private.

## Two Monorepos

Use a public monorepo for shared, public `/content`, assets, and open-source projects.

Use a private monorepo for private, shared `/content`, assets and private apps.

### Pros

- Excellent, clear separation of open-source and private code
- Efficent mgmt of multiple, related projects with varying privacy rqmts.
- Optimal code reuse.  Apps in private repo can easily reuse shared public assets.

### Cons
