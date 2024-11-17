---
title: Console
description: Server log
tags:
  - Console
---

## Description

{{ description }}

## Methods

### console.log()

```js
console.log('value');
```

Value: 1 | true | 'abc' | null | undefined | array | object

```js title="Examples"
console.log('Message'); // String, output Message
console.log([1, 2, 3, 4]); // Array, output: (4)[1, 2, 3, 4]
console.log({a:1, b@2, c:3}); // Object, output {a: 1, b: 2, c: 3}
```

### console.error()

```js
console.error('value'); // For logging error msgs
```

### console.warn()

```js
console.warn('Attention! Allons-y');
```

### console.clear()

```js
console.clear(); // Purpose, Unclear
```

### console.time() 

- ms elapsed between console.time('Label') and console.timeEnd('Label') methods execution.

```js title="Example"
console.time.('Label00');
let funct00 = function(){
    console.log('funct00 has begun...');
}
let funct01 = function() {
    console.log('funct01 has begun...');
}
funct00();
funct01();
console.timeEnd('Label00');
```

```console title="Output"
funct00 has begun...
funct01 has begun...
Label00: 2.015ms
```

### console.table()

```js
console.table({'apples':1, 'bananas':2}); // Input is array or object
```

```console title="Output"
(index)  Values
a        1
b        2
```

### console.count() 

Counts num of times funct() was called

```js title="Example"
for(let i=0;i<5;i++){
  console.count(i);
}
```

OUtput title="Output"
```console
0: 1
1: 1
2: 1
3: 1
4: 1
```

### console.group()

Group contents in a separate, indented block

```js title="Example"
console.group('simple');
  console.warn('warning!');
  console.error('error error error');
  console.log('vivi vini vici');
console.groupEnd('simple');
console.log('new section');
```

```console title="Output"
simple
    warning!
    error error error
    vivi vini vici
new section
```

## Custom Console Logs

Input is CSS.  Log will replace %c

TODO: Not clear what exactly, replacing "%c" does.

```js title="Example"
const spacing = '10px';
const styles = 
      `padding: ${spacing}; background-color: white; color: green; font-style: 
       italic; border: 1px solid black; font-size: 2em;`;
console.log('%cLabel', styles);
```

- Console sidebar organizes logs 
- Msgs can be filtered by label and msg type

