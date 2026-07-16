# Day 4: Functions — Declarations, Expressions, Arrow Functions, Default & Rest Parameters

## What I learned

functions are first-class objects in JavaScript and can be created in multiple ways. differences between function declarations, function expressions, and arrow functions, along with how default parameters and rest parameters make functions more flexible and easier to write.

---

# 1. Functions in JavaScript

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we can write it once inside a function and call it whenever needed.

Functions help in:

- Code reusability
- Better organization
- Easier debugging
- Breaking large problems into smaller ones
- Improving readability and maintainability

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

---

# 2. Function Declaration

A function declaration defines a named function using the `function` keyword.

```js
function greet() {
  console.log("Hello");
}
```

Calling it:

```js
greet();
```

Output

```
Hello
```

---

### Function Declarations are Hoisted

One major advantage is that declarations are **fully hoisted**.

JavaScript loads the entire function into memory before executing the code.

Therefore this works:

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output

```
Hello
```

Even though the function is written later, JavaScript already knows about it.

---

## When to use Function Declarations

Use function declarations when:

- The function is used throughout the file.
- You want the flexibility of calling it before its definition.
- The function is part of the public API of your module.

---

# 3. Function Expressions

A function expression stores a function inside a variable.

```js
const greet = function () {
  console.log("Hello");
};
```

Calling it:

```js
greet();
```

---

Unlike declarations, function expressions are **not fully hoisted**.

Only the variable declaration is hoisted.

Example:

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

Output

```
ReferenceError
```

If using `var`:

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

Output

```
TypeError:
greet is not a function
```

Why?

Because

```js
var greet;
```

is hoisted, but the function assignment happens later.

Initially

```js
greet === undefined
```

JavaScript then tries to execute

```js
undefined()
```

which throws a TypeError.

---

## Why use Function Expressions?

They are commonly used when

- Passing functions as arguments
- Creating callback functions
- Assigning functions to variables
- Returning functions from other functions

---

# 4. Function Declaration vs Function Expression

| Function Declaration                | Function Expression                           |
|-------------------------------------|-----------------------------------------------|
| Fully hoisted                       | Variable is hoisted, function is not          |
| Can be called before definition     | Cannot be called before assignment            |
| Usually used for reusable functions | Often used for callbacks and dynamic behavior |

---

# 5. Arrow Functions

Arrow functions are a shorter syntax for writing function expressions.

Basic syntax

```js
const add = (a, b) => a + b;
```

Equivalent to

```js
function add(a, b) {
  return a + b;
}
```

---

## Arrow Function Syntax Variations

### Multiple parameters

```js
const add = (a, b) => a + b;
```

---

### One parameter

Parentheses are optional.

```js
const square = x => x * x;
```

---

### No parameters

Parentheses are required.

```js
const greet = () => {
  console.log("Hello");
};
```

---

### Multiple statements

Curly braces are required.

```js
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

---

### Implicit Return

If there is only one expression, JavaScript automatically returns it.

```js
const add = (a, b) => a + b;
```

is equivalent to

```js
const add = (a, b) => {
  return a + b;
};
```

---

# 6. Arrow Functions and `this`

This is the biggest difference between regular functions and arrow functions.

Regular functions create their own `this`.

Arrow functions do **not** create their own `this`.

Instead, they inherit `this` from the surrounding scope (lexical `this`).

Example:

```js
const person = {
  name: "Alice",

  regular() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  }
};

person.regular();
person.arrow();
```

Output

```
Alice
undefined
```

Why?

The regular function is called as

```js
person.regular()
```

so

```
this = person
```

The arrow function does not create its own `this`.

Instead it looks outside the object for `this`, which is typically the global object or `undefined` (in modules/strict mode), so `this.name` is not `"Alice"`.

---

## When to Use Arrow Functions

Good for:

- Callbacks
- Array methods (`map`, `filter`, `reduce`)
- Promise callbacks
- Event handlers (when lexical `this` is desired)
- React components and hooks

Avoid using them as:

- Object methods that rely on `this`
- Constructor functions (cannot be used with `new`)

---

# 7. Default Parameters

Default parameters provide a value when an argument is omitted or explicitly passed as `undefined`.

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
```

Output

```
Hello Guest
```

---

Passing a value

```js
greet("Alice");
```

Output

```
Hello Alice
```

---

## Important Behavior

Defaults only apply when the argument is `undefined`.

```js
greet(undefined);
```

Output

```
Hello Guest
```

But

```js
greet(null);
```

Output

```
Hello null
```

because `null` is an actual value, not `undefined`.

Similarly,

```js
greet("");
```

Output

```
Hello
```

The empty string is considered a valid argument.

---

## Why Default Parameters Matter

They eliminate the need for manual checks.

Instead of writing

```js
function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }

  console.log(name);
}
```

we simply write

```js
function greet(name = "Guest") {}
```

---

# 8. Rest Parameters (`...`)

Rest parameters allow a function to accept **any number of arguments**.

Syntax

```js
function sum(...numbers) {

}
```

Everything after `...` becomes an array.

Example

```js
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

Output

```
[1,2,3,4]
```

---

## Why Use Rest Parameters?

Normally,

```js
function add(a, b) {

}
```

accepts only two arguments.

With rest parameters,

```js
function add(...numbers) {

}
```

the function can accept

```
0
1
2
10
100
1000
```

arguments.

---

## Using Rest Parameters

```js
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

sum(1,2,3,4);
```

Output

```
10
```

---

## Combining Normal Parameters with Rest Parameters

```js
function introduce(first, second, ...others) {
  console.log(first);
  console.log(second);
  console.log(others);
}

introduce("A","B","C","D","E");
```

Output

```
A
B
["C","D","E"]
```

The first two arguments go to named parameters.

Everything else is collected into the array.

---

## Rules for Rest Parameters

A function can have only **one** rest parameter.

✅

```js
function demo(a, ...rest) {}
```

❌

```js
function demo(...a, ...b) {}
```

---

The rest parameter must always be the **last parameter**.

✅

```js
function demo(a, b, ...rest) {}
```

❌

```js
function demo(...rest, b) {}
```

---

Rest parameters cannot have default values.

❌

```js
function demo(...nums = []) {}
```

---

# 9. Rest Parameters vs Arguments Object

Before ES6, JavaScript used the `arguments` object.

```js
function demo() {
  console.log(arguments);
}
```

The `arguments` object contains every argument passed to the function.

However, it is **array-like**, not a real array.

Therefore this fails:

```js
arguments.map();
```

because `arguments` does not have array methods.

Rest parameters solve this problem.

```js
function demo(...args) {
  args.map(x => x * 2);
}
```

Since `args` is a real array, all array methods work.

---

## Differences

| Rest Parameters                    | arguments Object                        |
|------------------------------------|-----------------------------------------|
| Real Array                         | Array-like Object                       |
| Supports map(), filter(), reduce() | Does not support array methods directly |
| Modern ES6 feature                 | Older JavaScript feature                |
| Works in arrow functions           | Arrow functions do not have `arguments` |
| Contains only remaining arguments  | Contains every argument                 |

---

## Why it matters

Understanding functions is important because they are the foundation of JavaScript.

These concepts help me:

- Write reusable code.
- Understand JavaScript hoisting.
- Know when to use declarations, expressions, or arrow functions.
- Understand how `this` behaves differently in arrow functions.
- Write cleaner code using default parameters.
- Accept unlimited arguments using rest parameters.
- Replace the old `arguments` object with a modern, easier-to-use alternative.

Functions are used everywhere in JavaScript, React, Node.js, and modern web development.

---

## Key syntax/snippets

```js
// Function Declaration
function greet() {}

// Function Expression
const greet = function () {};

// Arrow Function
const greet = () => {};

// Implicit Return
const add = (a, b) => a + b;

// Default Parameter
function greet(name = "Guest") {}

// Rest Parameter
function sum(...numbers) {}

// Regular + Rest
function demo(a, b, ...rest) {}

// this
obj.method();
```

---

## Gotchas / Things that confused me

- Function declarations are fully hoisted, but function expressions are not.
- Using `var` with a function expression can cause a `TypeError` because the variable is `undefined` until the assignment occurs.
- Arrow functions do **not** have their own `this`; they inherit it from the surrounding scope.
- Arrow functions should not be used as object methods when the method relies on `this`.
- Arrow functions with an implicit return should not use curly braces. If curly braces are used, an explicit `return` statement is required.
- Default parameters are only used when an argument is `undefined`; they do not replace `null`, `0`, `false`, or an empty string.
- Rest parameters collect all remaining arguments into a real array.
- A function can have only one rest parameter, and it must always be the last parameter.
- Rest parameters are different from the `arguments` object because they create a real array and work with array methods.
- Arrow functions do not have their own `arguments` object.

---

## Resources used

- MDN – Functions
- MDN – Arrow Functions
- MDN – Rest Parameters
- JavaScript Console (used to verify hoisting, `this`, default parameters, and rest parameter behavior)
```