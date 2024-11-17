---
title: Styling
description: Styling MkDocs
---

## Description

{{ description }}

## Markdown Extra

### Block Elements

Examples: (`<dev>, <table>, <pre>, <p>, ...`)

- Elements are surrounded by blank lines
- Start and end tags not indented
- Block elements in lists have same indent as rest of list 

### Block Level MD Flag

```md
<p markdown="1">Now I can use **markdown in HTML**.</p>
```

<p markdown="1">Now I can use **markdown in HTML**.</p>

### Pure HTML

This:

```html
<style>
#purple {
  color: purple;
}
.green {
  color: green;
}
</style>

<p class="green">Some line of text</p>
```

Yields:

<style>
#purple {
  color: purple;
}
.green {
  color: green;
}
</style>

<p class="green">Some line of text</p>


This:
```md
<p style="color:red">Some line of red text.</p>
```

Yields:

<p style="color:red">Some line of red text.</p>


### Headers

This: 

```html
<style>
#purple {
  color: purple;
}
.heading4 {
  font-size: 2em;
}
</style>

## Header text {\#id and \.class in curly braces}

```
 Results in:

Macro Syntax Error

File: tech/frameworks/mkdocs/styling.md

Line 76 in Markdown file: Missing end of coment tag

## Page-Specific Styling

To add custom styles to a specific page, add the [md_in_html](../mkdocs/add-ons/md_in_html.md) extension to `meta.yml`:

```yml
markdown_extensions:
  - md_in_html
```

and the add this line to the page:

```HTML
<link rel="stylesheet" href="../[some-page-name].css">
```

Then create the css file in the same directory as `[some-page-name].md`.

## Emojis

[Emoji Search](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/?h=icons#search)
