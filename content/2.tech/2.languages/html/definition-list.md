---
title: Definition Lists
description: HTML Definition Lists
tags:
  - Definition Lists
---

## Description

{{ description }}

## Purpose

When a google search string starts with [ define | what is | what are ], Google renders a [Google Glossary](https://cloud.google.com/translate/docs/advanced/glossary#format-glossary) definition string above search results.

## Usage

A Defn LIst can include:

- terms not found in dictionaries
- slang
- acronyms
- abbreviations

## HTML Definition List

An HTML [Definition List](https://www.w3.org/MarkUp/html3/deflists.html) (`<dl> ... </dl>`), is comprised of term element (`<dt></dt>`),  descr element (`<dd></dd>`) pairs:

```html
<dl>
<dt>yat</dt><dd>sup, hello, how are you doing?</dd>
<dt>yb</dt><dd>yes by, yes</dd>
</dl>
```

Result:

<dl>
<dt>yat</dt><dd>sup, hello, how are you doing?</dd>
<dt>yb</dt><dd>yes by, yes</dd>
</dl>

With block elements:

```html
<dl>
    <dt>otg</dt>
    <dd><p>plans, on the go (Ex: Nudding otg tonight)</p></dd>
    <dt>bk</dt>
    <dd><p>best kind, really good, common response to yat</p></dd>
```

Result:

<dl>
<dt>otg</dt><dd>plans, on the go (Ex: Nudding otg tonight)</dd>
<dt>bk</dt><dd>best kind, really good, common response to yat</dd>
</dl>

There can be multiple term and multiple definitions:


```html
<dl>
<dt>Description List</dt>
<dt>Definition List</dt>
<dt>Term List</dt>
<dd>List of terms and definitions</dd>
</dl>
```

Result:

<dl>
<dt>Description List</dt>
<dt>Definition List</dt>
<dt>Term List</dt>
<dd>List of terms and definitions</dd>
</dl>

### `<dl>` Default CSS

```css
dl {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
```

### `<dt>` Default CSS

```css
dt {
  display: block;
}
```
