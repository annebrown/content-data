---
title: Usage
description: How to Use JavaScript
---

## Description

{{ description }}

## Usage

### Embedded

```html title="Embedded in head or body elememt"
<script>
  // Logic
</script>
```

### External

```html title="External File Link in head or body element"
<script src="path/to/global.js"></script>
<script src="path/to/section.js"></script>
```

## Statements

- end in semicolon
- whitespaces ignored
- can put multiple statments on a single line
- statements can span lines




## Execution Context

`Memory Allocation Phase`

:    Functs and vars get stored into mem as key-val pairs

`Code Execution Phase`

:    Thread of execution, whereby vals of functs and vars are updated in order 

When a function is called, a new Execution Context is created inside the calling execution context.

## Parsing Order
 
- HTML file is parsed until it hits `<script>` tag
- Parsing is paused until script is fetched and executed.
- JS files are executed in order of appearance in the doc.

### async Attrib

```js
<script src="script.js" async>
```

- js file is downloaded at same time as HTML parsing.  
- When file is finished downloading, HTML parsing is paused until code is executed.

## defer Attrib

```js
<script src="script.js" defer>
```

- file is download during HTML parsing
- file executes post parsing
- deferred scripts execute in order of appearance
