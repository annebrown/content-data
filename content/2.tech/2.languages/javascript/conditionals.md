---
title: Conditionals
description: JavaScript Conditional Statements
---

## Description

{{ description }}

## if, else if, else

```js
if (test0) {
    // Logic
    if(anothTest) {
        // Logic
    }
    // Logic
} else if (test1) { // First test failed
    // Logic
} else { // All else fail
    // Logic
}
```

```js
if (cups < 2) {
    message = "Make coffee now!";
} else if (cups >6) {
    message = "S'all good.";
} else {
    message = "Make coffee soon.";
}
```

## Ternary Opertor

```js
(test) ? // Logic if true : // Logic if false 
```

```js title="Example"
return (guess == 5) ? "Correct" : "Incorrect";
```

## switch

```js
switch(result) {
    case "PASS":
        // Logic
        break;
    case "FAIL":
    case undefined:
        // Logic
        break;
    default:
        // Logic
}
```

```js
let answer = 5;
switch (true) {
    case guess > 5;
        msg = "higher"
        break;
    case guess < 5;
        msg = "lower";
        break;
    case guess == 5;
        msg = "correct";
    default 
        msg = "Please enter a number from 1 to 10";
}
```
