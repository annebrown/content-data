---
title: Loops
description: JavaScript Loop Statements
---

## Description

{{ description }}

## for

```js
for ( counter=0; test; counter++)
```

```js title="Examples"
for (i=0; i <=5; i++) {
    // Logic
}

let counter=2;
for (; i <= 5; counter++)
    // Logic
    break;
}
```

## for in

- iterating over enumerable properties of an object

```js
for (let i in object) {
    // Logic for i
}
```

```js title="Example"
for (let car in cars) {
    // Logic for car
    console.log(car[cars]]);
}
```

## for of

- initializes array, then interates over vals of array element or iterable object

```js
for (const i of array){
    // Logic
}
```

## while

```js
while (test) {
    // Logic
}
```

## do while

```js
do {
    // Logic
} while (test);
```

## Labels

```js title="Example"
for (let i in object) {
    brightnessLoop: while ( object.brightness >= 100) {
    
        contrastLoop: while (object.contrast <= 50) {
            optimizeValue(this.object);
            continue everythingLoop;
        }
        i++; // Image value optimized
    }
}
```