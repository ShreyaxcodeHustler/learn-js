# Day 2: Data Types & Type Coercion

## What I learned

Today I learned how JavaScript stores different kinds of data and how it automatically converts data types during operations.

### 1. Primitive vs Reference Types

JavaScript data is divided into two categories.

#### Primitive Types (Stored by Value)

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

Primitives store the actual value. When assigning one primitive variable to another, JavaScript creates a copy of the value.

```js
let a = 5;
let b = a;

b = 10;

console.log(a); // 5
console.log(b); // 10
```

Changing `b` does not affect `a` because they are completely separate values.

---

#### Reference Types (Stored by Reference)

Reference types include:

- Objects
- Arrays
- Functions

Instead of storing the actual object, variables store a reference (memory address) to that object.

```js
let obj1 = {
  value: 5,
};

let obj2 = obj1;

obj2.value = 10;

console.log(obj1.value); // 10
```

Both variables point to the same object in memory.

The same applies to arrays.

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4]
```

---

### Breaking the Reference

To avoid modifying the original object, create a copy using the spread operator.

```js
let obj1 = {
  value: 5,
};

let obj2 = {
  ...obj1,
};

obj2.value = 20;

console.log(obj1.value); // 5
console.log(obj2.value); // 20
```

This creates a completely new object.

This is exactly why React state updates use the spread operator instead of directly mutating objects.

---

### 2. The `typeof` Operator

The `typeof` operator returns the data type of a value.

```js
typeof "Hello";        // "string"
typeof 42;             // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object"
typeof {};             // "object"
typeof [];             // "object"
typeof function() {};  // "function"
```

Important observations:

- Arrays are objects.
- Functions have their own `"function"` type.
- `typeof null` returns `"object"` because of a historical JavaScript bug.

---

### 3. Type Coercion

JavaScript is weakly typed, meaning it automatically converts values between different data types when needed.

Examples:

```js
"5" + 3          // "53"
"5" - 3          // 2
"5" * "2"        // 10
true + 1         // 2
false + 1        // 1
null + 1         // 1
undefined + 1    // NaN
```

Arrays also behave in surprising ways.

```js
[] + []          // ""
[] + {}          // "[object Object]"
```

---

### Rule for the `+` Operator

The `+` operator performs either:

- Addition
- String concatenation

If either operand is already a string, JavaScript usually performs concatenation.

```js
"5" + 3     // "53"
```

Other operators (`-`, `*`, `/`) always try to convert operands into numbers.

```js
"5" - "2"   // 3
```

---

### 4. `==` vs `===`

#### Loose Equality (`==`)

Automatically converts data types before comparing.

```js
"5" == 5             // true
0 == false           // true
null == undefined    // true
```

---

#### Strict Equality (`===`)

Compares both value and data type without conversion.

```js
"5" === 5            // false
0 === false          // false
null === undefined   // false
```

Best practice:

> Always use `===` unless you intentionally need type coercion.

---

### 5. Truthy and Falsy Values

Only **8 values are falsy** in JavaScript.

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

Examples:

```js
Boolean("0")     // true
Boolean([])      // true
Boolean({})      // true
```

Even empty arrays and empty objects are considered truthy.

---

## Why it matters

Understanding these concepts is important because:

- It explains why copying objects behaves differently from copying numbers or strings.
- It helps avoid accidental object mutation.
- It explains many "weird JavaScript" behaviors caused by type coercion.
- It helps write safer comparisons using `===`.
- It makes debugging much easier.
- These are some of the most common JavaScript interview topics.
- Understanding references is essential for React state management and immutable updates.

---

## Key syntax/snippets

```js
// Primitive copy
let a = 5;
let b = a;

// Reference copy
let obj1 = { value: 5 };
let obj2 = obj1;

// Break object reference
let copy = {
  ...obj1,
};

// typeof
typeof "Hello";
typeof 42;
typeof [];
typeof {};
typeof null;

// Equality
"5" == 5;
"5" === 5;

// Truthy/Falsy
Boolean([]);
Boolean({});
Boolean("");

// Safe addition
function safeAdd(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return "Invalid input";
}
```

---

## Gotchas / things that confused me

- Assigning an object to another variable does **not** create a copy—it only copies the reference, so changing one variable also changes the original object.
- `typeof null` returns `"object"` even though `null` is a primitive. This is a historical JavaScript bug.
- Arrays are objects, so `typeof []` returns `"object"` instead of `"array"`.
- The `+` operator performs string concatenation whenever one operand is a string, while `-`, `*`, and `/` convert values to numbers.
- `null + 1` becomes `1`, but `undefined + 1` becomes `NaN`.
- Empty arrays (`[]`) and empty objects (`{}`) are truthy, even though they contain no values.
- `NaN` is not equal to itself, so `NaN == NaN` and `NaN === NaN` are both `false`. Use `Number.isNaN()` to check for `NaN`.
- I should default to using `===` because it avoids unexpected type coercion.

---

## Resources used

- MDN – JavaScript Data Types and Data Structures
- MDN – Equality Comparisons and Sameness
- JavaScript Console (used to verify type coercion, equality, and truthy/falsy behavior)