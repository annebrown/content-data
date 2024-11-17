---
title: Strings
description: JavaScript String Data Type
---

## Description

{{ description }}

## Usage

```js
let codeString = "perl";
let stackString = "LAMP uses ${codeString}";
```

## Index

- string index, char position in string, starts at 0

## Multi-Line String

```js
let newString = `
    This string spans
    more than one line`;  // Backticks
let anotherString = "A line that \
spans two lines";  // Backslash
let recommendedMethod = "Use the concatenatiion" +
'operator which has wider browser support";
```

## Concatenator Operator

```js
let a = 'hello,';
let b = ' there';
a + b; 'hello, there'
```

## length Prop

```js
const stringA = "Circle";
let stringLen = stringA.length; // 6
```

## Escaping Chars

```js
string0 = "This is a single quote: \'"; 
string1 = "This is a double quote: \"";  
string2 = "This is a backslash: \\";

```

## substring Method

```js
let result = targetString.substring(startIndex , endIndex);
let phoneNumberA = "1-800-555-5555"; // 14 chars
let phoneNumberB = "555-123-5555"; // 12 digits
let lenA = phoneNumberA.length; 
let lastFourDigits = phoneNumberA.substring(lenA - 4, lenA);
```

## toUpperCase() toLowerCase() Methods

- converts entire string

```js
let actionWord = actionWord.toUpperCase() + "!";
```

## indexOf() Method

- Returns -1, or index of 1st match

```js
let targetString = "0123456789";
let digitIndex = targetString.indexOf('5');  // 5
```

## replace() Method

- Removes searched for subString, inserts new subString at index of old

```js
let newString = originalString.replace("gray", "grey");
let newString = originalString.replace("colour", "color");
```

## trim() Method

```js
let noBookendWhiteSpaceString = messyString.trim();  
```

## charAt() Method

- Returns empty string, or char located at index

```js
let charAtIndex = targetString[10];
Return "\"" + charAtIndex + "\" is the tenth char.";
```

## localeCompare() Method

- Returns the difference of ASCII vals

```js
let firstString = "IDK";
let secondString = "IDK";
Return secondString.localeCompare(firstString); // 0 or IDK
```

## String Object

```js
let stringObject = new String("Cello"); 
```
