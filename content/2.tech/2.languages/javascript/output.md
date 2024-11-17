---
title: Output Options
description: JavaScript Output Options
---

## Description

{{ description }}

## Update innerHTML

### getElementById(id="targetElementID") method

- defines where in the doc to put 'content'

### innerHTML property

- defines HTML content for the update

```js
document.getElementById(id="targetElement").innerHTML = 'content'
```

## HTML Output

### document.write() Method

- writes to HTML doc, to build page

- if a doc is already loaded, it is replaced 


## Alert Box

### window.alert() Method

- Launches a pop-up window w msg

```js
alert("Changes Saved!);
```

- Default global scope object is `window`
- Vars, props, and methods belong to window object by default
- `window` optional

## Console

- Server Log
- See [console](console.md) for usage

```js title="Example"
ErrorMsg = "Error: File: ${scriptfile}, Function: myfunctionName ";
ErrorMsg += "Msg: dB not connecting, dB Error $(dberror)";
console.log(errorMsg);
```

## window.print() Method

- Launches system print IF

```js
<button onclick="window.print()">Print this Page</button>
```
