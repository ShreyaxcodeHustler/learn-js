# Day 1: `var`, `let`, `const`, Scope & Hoisting

## What I learned

Today I learned the fundamentals of JavaScript variables, scope, and hoisting. These concepts explain why many JavaScript bugs happen and form the foundation for understanding closures, asynchronous programming, React state, and modern JavaScript.

---

# 1. Variables in JavaScript

JavaScript provides three ways to declare variables:

* `var`
* `let`
* `const`

Although they all create variables, they behave very differently.

---

## `var`

`var` is the oldest way to declare variables (before ES6).

### General Syntax

```javascript
var name;
var name = value;

var name1 = value1, name2 = value2;

var name1;
var name2 = value2;

var name1 = value1,
    name2,
    name3 = value3;
```

### Example

```javascript
var age = 20;

console.log(age);

age = 21;

console.log(age);
```

Output

```text
20
21
```

### Characteristics

* Function scoped
* Can be redeclared
* Can be reassigned
* Hoisted
* Initialized with `undefined`

Example:

```javascript
var city = "Delhi";
var city = "Mumbai";   // allowed

city = "Bangalore";    // allowed

console.log(city);
```

Output

```text
Bangalore
```

---

### Function Scope

A `var` variable belongs to the entire function, not just the block.

```javascript
function demo() {

    if (true) {
        var message = "Hello";
    }

    console.log(message);
}
```

Output

```text
Hello
```

Even though `message` was declared inside the `if` block, it is still accessible because `var` ignores block boundaries.

---

### Global `var`

When declared globally inside a normal script,

```javascript
var username = "John";
```

JavaScript adds it as a property of the global object (`window` in browsers).

```javascript
console.log(window.username);
```

Output

```text
John
```

The property is **non-configurable**, so it cannot be deleted.

```javascript
delete username;
```

returns

```text
false
```

---

# `let`

Introduced in ES6 to fix many problems with `var`.

---

### General Syntax

```javascript
let name;

let age = 20;

let x = 10,
    y = 20;
```

---

### Characteristics

* Block scoped
* Can be reassigned
* Cannot be redeclared in the same scope
* Hoisted
* Exists inside the Temporal Dead Zone before declaration

---

Example

```javascript
let score = 90;

score = 95;

console.log(score);
```

Output

```text
95
```

Redeclaration is not allowed.

```javascript
let score = 90;
let score = 100;
```

Output

```text
SyntaxError
```

---

# `const`

Used for variables whose reference should never change.

---

### General Syntax

```javascript
const PI = 3.14159;

const country = "India";
```

A `const` variable **must be initialized immediately.**

```javascript
const x;
```

Output

```text
SyntaxError
```

---

### Characteristics

* Block scoped
* Cannot be reassigned
* Cannot be redeclared
* Hoisted
* Temporal Dead Zone applies

---

Example

```javascript
const tax = 18;

tax = 20;
```

Output

```text
TypeError
```

---

## Does `const` mean immutable?

No.

This is one of the biggest misconceptions.

`const` protects the **variable reference**, not the object itself.

Example

```javascript
const user = {
    name: "Shreya",
    age: 20
};

user.age = 21;

console.log(user);
```

Output

```javascript
{
   name: "Shreya",
   age: 21
}
```

Perfectly valid.

However,

```javascript
user = {};
```

throws

```text
TypeError
```

because the reference cannot change.

---

# Comparison Table

| Feature                 | var         | let   | const |
| ----------------------- | ----------- | ----- | ----- |
| Scope                   | Function    | Block | Block |
| Redeclare               | ✅           | ❌     | ❌     |
| Reassign                | ✅           | ✅     | ❌     |
| Hoisted                 | ✅           | ✅     | ✅     |
| Initialized immediately | `undefined` | No    | No    |
| Temporal Dead Zone      | ❌           | ✅     | ✅     |

---

# Scope

Scope determines where a variable is accessible.

There are three major types.

---

## 1. Global Scope

Declared outside every function.

```javascript
let language = "JavaScript";

function printLanguage() {
    console.log(language);
}

printLanguage();
```

Output

```text
JavaScript
```

---

## 2. Function Scope

Only `var` follows function scope.

```javascript
function test() {

    var x = 10;

    console.log(x);

}

console.log(x);
```

Output

```text
ReferenceError
```

---

## 3. Block Scope

Created by

* if
* else
* for
* while
* switch
* try
* catch
* `{ }`

`let` and `const` remain inside the block.

```javascript
if (true) {

    let marks = 90;

}

console.log(marks);
```

Output

```text
ReferenceError
```

---

Example showing all three

```javascript
function demo() {

    var a = 1;

    if (true) {

        let b = 2;

        const c = 3;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    console.log(a);

}
```

Output

```text
1
2
3
1
```

Outside the block,

```javascript
console.log(b);
```

throws

```text
ReferenceError
```

---

# Hoisting

One of the most confusing JavaScript concepts.

Before JavaScript executes code, it processes **declarations**.

This makes it seem as though declarations move to the top.

This behavior is called **hoisting**.

Important:

Only the **declaration** is hoisted.

The **initialization stays where it is.**

---

Example

```javascript
console.log(a);

var a = 10;
```

JavaScript behaves like

```javascript
var a;

console.log(a);

a = 10;
```

Output

```text
undefined
```

---

## Hoisting with `let`

```javascript
console.log(b);

let b = 20;
```

Output

```text
ReferenceError
```

---

## Hoisting with `const`

```javascript
console.log(c);

const c = 30;
```

Output

```text
ReferenceError
```

---

# Temporal Dead Zone (TDZ)

Both `let` and `const` are hoisted.

However,

they cannot be accessed before the declaration line.

The region between

* entering the scope
* actual declaration

is called the **Temporal Dead Zone**.

Example

```javascript
{
    console.log(x);

    let x = 5;
}
```

Output

```text
ReferenceError
```

---

# Function Hoisting

Function declarations are fully hoisted.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

---

Function expressions behave differently.

```javascript
sayHi();

var sayHi = function() {

    console.log("Hi");

};
```

Output

```text
TypeError
```

Reason:

```javascript
var sayHi;
```

is hoisted.

Initially,

```javascript
sayHi === undefined
```

So

```javascript
undefined();
```

causes the error.

---

# Why `var` is considered dangerous

Because it ignores block scope.

Example

```javascript
if (true) {

    var number = 10;

}

console.log(number);
```

Output

```text
10
```

Many accidental bugs happen because variables leak outside blocks.

---

# Key Syntax / Snippets

## Variable declarations

```javascript
var username = "Alex";

let age = 22;

const PI = 3.14159;
```

---

## Reassignment

```javascript
let count = 1;

count++;

count += 5;
```

---

## Constant object

```javascript
const student = {
    name: "Sam"
};

student.name = "John";

student.age = 20;
```

---

## Block scope

```javascript
{
    let x = 10;
    const y = 20;
}
```

---

## Function scope

```javascript
function demo() {

    var x = 5;

}
```

---

## Hoisting

```javascript
console.log(a);

var a = 5;
```

---

## TDZ

```javascript
console.log(b);

let b = 10;
```

---

## Function declaration

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

---

## Function expression

```javascript
var hello = function () {

    console.log("Hello");

};
```

---

# Gotchas / Things That Confused Me

### 1. `setTimeout` inside loops (`var` vs `let`)

This was one of the biggest "aha!" moments.

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

Output

```text
3
3
3
```

At first I expected:

```text
0
1
2
```

The reason is that `var` creates **one shared variable** for the entire loop. By the time the `setTimeout` callbacks run, the loop has finished and `i` is `3`, so every callback prints the same value.

Using `let` fixes the issue because each iteration gets its own block-scoped copy of the variable.

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

Output

```text
0
1
2
```

This helped me understand why `let` is generally preferred in loops.

---

### 2. Fixing `createCounters()`

Original code:

```javascript
function createCounters() {
    var counters = [];

    for (var i = 0; i < 3; i++) {
        counters.push(function () {
            return i;
        });
    }

    return counters;
}

const counters = createCounters();

console.log(counters[0](), counters[1](), counters[2]());
```

I expected:

```text
0 1 2
```

Actual output:

```text
3 3 3
```

The problem is the same as the `setTimeout` example: every function refers to the same `var i`, which has the final value `3` after the loop ends.

The simplest fix (using only what I learned today) is to replace `var` with `let` in the loop.

```javascript
function createCounters() {
    const counters = [];

    for (let i = 0; i < 3; i++) {
        counters.push(function () {
            return i;
        });
    }

    return counters;
}
```

Now the output is:

```text
0 1 2
```

This reinforced how block scope prevents bugs when creating functions inside loops.

---

# Why it matters

Understanding variables, scope, and hoisting is essential because almost every advanced JavaScript concept builds on them.

These topics explain:

* Why variables sometimes become `undefined`
* Why `ReferenceError` happens with `let` and `const`
* Why `var` behaves differently inside loops and blocks
* Why callbacks sometimes use unexpected values
* Why closures work the way they do (to be explored later)
* Why React and modern JavaScript strongly prefer `let` and `const` over `var`

A solid understanding of these basics makes debugging much easier and prepares me for asynchronous JavaScript, closures, promises, React state management, and interviews.

---

# Resources Used

* MDN – `var`
* MDN – `let`
* MDN – Hoisting Glossary
* Practice exercises:

  * Predict the output (`var` vs `let`)
  * `setTimeout` loop example
  * `createCounters()` bug fix
  * Scope demonstration script
