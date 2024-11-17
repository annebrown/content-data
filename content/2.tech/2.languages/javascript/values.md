---
title: Values
description: JavaScript Values
---

## Description

{{ description }}


## Values

### Fixed

`Literal`

:    Numbers - decimals optional
:    Strings - single or double quoted

### Variable

`Variable`

:    Name of storage locn where data is stored

## Comments

Line: `// Line Comment`

Block: `/* Anything between these */`

## Data Types

### Primitive Data Types

```js
let x = 3; // Number Data Type
let result = "PASS"; // String
let testPassed = true; //Boolan
let noDefault = null; // Null 
let noDefault; // Undefined
let flagvar = Symbol("PASS"); // Symbol
LET foodPrice = BigInt("0f10111111"); // Bigint
```

### Non-Primitive (Ref) Data Types

- derived from primitive data types
- references
- maths, functions, dates, arrays, maps, sets

```js
let importantObj = {}; // Object 
let importantObj new Object(); // Object
let colors = ["red", "yellow", "green"]; // Array Data Type
let book = { // Object Data Type
    title: "JavaScript Programming",
    ISBN: "978-3-16-148410-",
    author: "John Doe",
    price: 25.99 
}
```

## Functions

```js
function functionName( arg1, arg2, arg3) {
    // Logic
    let x = 0;
    console.log(x);
    return x;
}
functionName(); //execute
```

see [functions](../javascript/functions.md).

## Identifiers

- used to name variables, keywords,and functs
- begin with letter, $ or _
- case Sensitive, camelCase

## Char Set

- e.g., unicode UTF-8
- chars, punctuation and symbols
