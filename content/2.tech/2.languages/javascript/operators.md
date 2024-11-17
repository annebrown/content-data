---
title: Operators
description: JavaScript Operators
---

## Description

{{ description }}

## Assignment Operators

- Assign vals to vars

```js
a=10;  // Assignment
a++; // Return, then Increment
++a; // Increment, then Return
a--; // Return, then Decrement
--a; // Decrement, then Return
+a; // Convert to number
-a; // /convert ot negative
a+=b; // Addition // Add numbers, or concat strings
a-=b; // Subtraction
a*=b; // Multiplication
a/=b; // Division
a%=b; // Remainder 
a**=b; // Exponentiation
a<<=b; // Left Shift
a>>=b; // Right Shift
a&=b; // Bitwise AND
a|=b; // Bitwise OR
A^=B; // Bitwise XOR
a&&=b; // Logical AND - if a is true, a = b
a||=b; // Logicacl OR - if a is false, a = b
a??=b; // If a is null or undef, then a=b
```

## Comparison Operators

```js
a == b
a != b
a === b // Strict: Value and type
a !== b // Strict: value and Type
a > b
a >= b
a < b
a <= b
a & b // Bitwise AND
a | b // Bitwise OR
a ^ b // True if different
a ~ b // Bitwise NOT
a << b // Shift b bits left
a >> b // Shift b bits right
a >>> b // Zero-Fill Right Shift b bits, add 0 from left
```

## Logical Operators

```js
! // NOT
&& // AND
| // OR
```

## Comma Operator

- Evaluate left to right, return rightmost 

```js title="Example"
// Update two vars in same expression
for (let a = 0, b = 5; a <= 5; a++, b--) {
    console.log(a, b);
}
```

## Concatenator Operator

```js
let a = 'hello,';
let b = ' there';
a + b; 'hellp, there'
```

## type Operator

- returns number | string | boolean | object | undefined

```js
typeof varName;
```

## delete Operator

```js
delete objectName
delete objectName.property
delete objectName[ 'property' ]
```

## void Operator

- returns undefined

```js
return void 0;  
```

## Relational Operators

### in

- Tests if attrbName property exists in object or if attr val exists in array

```js
attribName in someThing; 
```

## instanceof
 - TEsts if obj is an instance of a class or constructor