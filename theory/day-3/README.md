# Day 3: Operators, Template Literals & Control Flow

## What I learned

 how JavaScript evaluates expressions, how different operators behave, how control flow works, and the different ways to iterate over data.

---

## 1. Expressions vs Statements

An **expression** is any piece of code that produces a value.

```js
2 + 3          // 5
"Hello"
age >= 18
x = 5          // evaluates to 5
```

A **statement** performs an action.

```js
if (age >= 18) {
  console.log("Adult");
}

for (let i = 0; i < 5; i++) {}
```

Expressions can exist inside statements.

---

## 2. Arithmetic Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | `2 + 3` |
| - | Subtraction | `5 - 2` |
| * | Multiplication | `4 * 3` |
| / | Division | `10 / 2` |
| % | Remainder | `10 % 3` → `1` |
| ** | Exponent | `2 ** 3` → `8` |

### Common uses

```js
num % 2 === 0   // Even number

index % length  // Circular indexing

2 ** 4          // 16
```

---

## 3. Assignment Operators

Instead of writing

```js
x = x + 5;
```

use

```js
x += 5;
```

Other shorthand operators:

```js
x -= 2;
x *= 3;
x /= 2;
x %= 2;
x **= 2;
```

These make code shorter and easier to read.

---

## 4. Comparison Operators

| Operator | Meaning |
|----------|---------|
| == | Loose equality |
| === | Strict equality |
| != | Loose inequality |
| !== | Strict inequality |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

Always prefer:

```js
===
```

because it compares both value and type.

---

## 5. Logical Operators

### Logical AND (`&&`)

Returns the first falsy value or the last truthy value.

```js
true && true      // true
"Hello" && "JS"   // "JS"
0 && "Hi"         // 0
```

Common React pattern:

```jsx
isLoading && <Spinner />
```

---

### Logical OR (`||`)

Returns the first truthy value.

```js
0 || "Guest"        // "Guest"
"John" || "Guest"   // "John"
```

Useful for fallback values.

```js
const username = input || "Guest";
```

---

### Logical NOT (`!`)

Reverses truthiness.

```js
!true     // false
!false    // true
```

Double NOT converts any value into a Boolean.

```js
!!"Hello"    // true
!!0          // false
```

---

## 6. Nullish Coalescing (`??`)

Returns the right value **only** if the left value is:

- `null`
- `undefined`

```js
null ?? "Guest"       // "Guest"
undefined ?? "Guest"  // "Guest"

0 ?? "Guest"          // 0
false ?? true         // false
"" ?? "Guest"         // ""
```

### Difference between `||` and `??`

```js
0 || "Guest"
```

Output

```js
"Guest"
```

because `0` is falsy.

But

```js
0 ?? "Guest"
```

returns

```js
0
```

because `0` is **not null or undefined**.

Use `??` whenever `0`, `false`, or `""` are valid values.

---

## 7. Short-Circuit Evaluation

JavaScript evaluates logical expressions from left to right.

If the result is already known, it stops immediately.

```js
true || expensiveFunction();
```

`expensiveFunction()` never runs.

Similarly,

```js
false && expensiveFunction();
```

also never runs.

This behavior is called **short-circuiting**.

---

## 8. Template Literals

Template literals use backticks.

```js
const name = "Alice";

console.log(`Hello ${name}`);
```

Expressions work too.

```js
console.log(`2 + 3 = ${2 + 3}`);
```

Multi-line strings become much cleaner.

```js
const message = `
Hello
World
`;
```

---

## 9. Ternary Operator

Short form of an if...else.

```js
const status =
  age >= 18 ? "Adult" : "Minor";
```

Instead of

```js
if (age >= 18) {
  status = "Adult";
} else {
  status = "Minor";
}
```

Common React usage:

```jsx
isLoggedIn
  ? <Dashboard />
  : <Login />
```

---

## 10. Switch Statement

Useful when checking multiple values.

```js
switch(day){

case "Mon":
case "Tue":
    console.log("Weekday");
    break;

case "Fri":
    console.log("Weekend Soon");
    break;

default:
    console.log("Unknown");

}
```

### Fall-through

Without `break`, execution continues into the next case.

Sometimes intentional.

Usually a bug.

---

## 11. Loops

### for

Best when you know the number of iterations.

```js
for(let i=0;i<5;i++){

}
```

---

### while

Runs while the condition remains true.

```js
while(condition){

}
```

---

### do...while

Runs **at least once**.

```js
do{

}while(condition);
```

---

### for...of

Iterates over **values**.

Works with

- Arrays
- Strings
- Maps
- Sets
- NodeLists
- Generators
- Any iterable

```js
const arr=[10,20,30];

for(const value of arr){

    console.log(value);

}
```

Output

```
10
20
30
```

Each iteration creates a new loop variable.

Changing it does **not** modify the original array.

---

### for...in

Iterates over **keys (property names)**.

```js
const user={
    name:"Alice",
    age:20
};

for(const key in user){

    console.log(key);

}
```

Output

```
name
age
```

Avoid using `for...in` for arrays because it iterates over property names and inherited enumerable properties rather than just array values.

---

## 12. Operator Precedence

Some operators execute before others.

```js
1 + 2 * 3
```

becomes

```js
1 + (2 * 3)
```

Result

```
7
```

Use parentheses whenever precedence isn't obvious.

```js
(1 + 2) * 3
```

Result

```
9
```

---

## Why it matters

Understanding operators and control flow helps me:

- Write cleaner JavaScript.
- Avoid bugs caused by operator precedence.
- Use `??` instead of `||` when valid falsy values should be preserved.
- Write concise code with ternary operators.
- Choose the correct loop for different situations.
- Understand common React patterns like conditional rendering.
- Read production JavaScript more easily.

---

## Key syntax/snippets

```js
// Arithmetic
2 ** 3;
10 % 2;

// Assignment
x += 5;

// Comparison
a === b;

// Logical
a && b;
a || b;
!a;

// Nullish Coalescing
value ?? defaultValue;

// Template Literals
`Hello ${name}`;

// Ternary
condition ? a : b;

// Switch
switch(value){}

// Loops
for(){}
while(){}
do{}while();

for(const value of iterable){}

for(const key in object){}
```

---

## Gotchas / things that confused me

- `&&` and `||` return actual values, not always `true` or `false`.
- `||` treats `0`, `false`, and `""` as missing values.
- `??` only falls back for `null` and `undefined`.
- Forgetting `break` in a `switch` causes fall-through.
- `for...of` gives values, while `for...in` gives keys.
- `for...in` should generally not be used on arrays.
- Operator precedence can produce unexpected results without parentheses.
- Template literals allow JavaScript expressions inside `${}` and support multi-line strings.
- Short-circuit evaluation prevents unnecessary function calls and is commonly used in React.

---

## Resources used

- MDN – Expressions and Operators
- MDN – Nullish Coalescing Operator (`??`)
- MDN – `for...of` Statement
- JavaScript Console (used to verify operator behavior and loop outputs)

 Short-Circuit Evaluation

Short-circuit evaluation is an optimization used by JavaScript logical operators (`&&`, `||`, and `??`).

Instead of evaluating **every expression**, JavaScript evaluates expressions **from left to right** and **stops as soon as it already knows the final result**.

This means the remaining expressions are **never executed**.

---

### Why is it called "short-circuit"?

Think of an electrical circuit.

If there is a shortcut that reaches the answer immediately, electricity doesn't need to travel through the rest of the circuit.

Similarly, JavaScript "cuts the evaluation short" once it already knows the result.

---

## Short-Circuit with `&&` (Logical AND)

The `&&` operator returns:

- The **first falsy value** it encounters.
- If all operands are truthy, it returns the **last value**.

Because of this behavior, if JavaScript finds a falsy value, it immediately stops evaluating.

Example:

```js
console.log(false && "Hello");
```

Output

```js
false
```

Why?

```
false && "Hello"

↓

The first value is already false.

For an AND operation, if one operand is false,
the entire expression must be false.

No need to evaluate "Hello".
```

Another example:

```js
console.log(0 && "JavaScript");
```

Output

```js
0
```

Since `0` is falsy, JavaScript immediately returns `0`.

The second operand is never evaluated.

---

### Example with a Function

```js
function greet() {
  console.log("Function executed");
  return "Hello";
}

console.log(false && greet());
```

Output

```js
false
```

Notice that

```
Function executed
```

is **never printed**.

The function is never called because JavaScript already knows the final answer.

---

## Short-Circuit with `||` (Logical OR)

The `||` operator works in the opposite way.

It returns:

- The **first truthy value**
- Otherwise the last value

Example:

```js
console.log("JavaScript" || "Python");
```

Output

```js
JavaScript
```

Why?

```
"JavaScript" || "Python"

↓

The first value is already truthy.

For an OR operation, one truthy value is enough.

The second operand is ignored.
```

---

Example:

```js
console.log(0 || "Guest");
```

Output

```js
Guest
```

Explanation:

```
0 is falsy.

JavaScript continues to the next operand.

"Guest" is truthy.

Return "Guest".
```

---

Function example:

```js
function welcome() {
  console.log("Function executed");
  return "Guest";
}

console.log("John" || welcome());
```

Output

```js
John
```

The function is **never executed** because `"John"` is already truthy.

---

## Short-Circuit with `??` (Nullish Coalescing)

The `??` operator only checks whether the left operand is:

- `null`
- `undefined`

If it is neither, JavaScript immediately returns the left operand.

Example:

```js
console.log(0 ?? "Guest");
```

Output

```js
0
```

Why?

```
0 is NOT null.

0 is NOT undefined.

Stop immediately.

Return 0.
```

---

Example:

```js
console.log(null ?? "Guest");
```

Output

```js
Guest
```

Because

```
null

↓

means "no value"

↓

Evaluate the second operand.
```

---

Function example

```js
function getDefault() {
  console.log("Default value created");
  return "Guest";
}

console.log("Alice" ?? getDefault());
```

Output

```js
Alice
```

The function is never called because `"Alice"` is neither `null` nor `undefined`.

---

## Visual Flow

### AND (`&&`)

```
Expression A && Expression B

↓

Is A falsy?

YES
 ↓
Return A
Stop

NO
 ↓
Evaluate B
Return B
```

---

### OR (`||`)

```
Expression A || Expression B

↓

Is A truthy?

YES
 ↓
Return A
Stop

NO
 ↓
Evaluate B
Return B
```

---

### Nullish (`??`)

```
Expression A ?? Expression B

↓

Is A null or undefined?

YES
 ↓
Evaluate B
Return B

NO
 ↓
Return A
Stop
```

---

## Why Short-Circuit Evaluation Matters

It improves performance because JavaScript skips unnecessary work.

Example:

```js
const user = null;

user && console.log(user.name);
```

Since `user` is `null`, JavaScript stops immediately.

It never tries to access `user.name`, avoiding an error.

---

Another example:

```js
const username = input || "Guest";
```

If `input` is truthy,

```
Return input.

Do not even look at "Guest".
```

---

## Real-World React Examples

### Conditional Rendering

```jsx
isLoading && <Spinner />
```

If

```
isLoading = true
```

↓

React renders `<Spinner />`.

If

```
isLoading = false
```

↓

React returns `false`.

Nothing is rendered.

---

### Default Props

```jsx
const name = user.name || "Guest";
```

If

```
user.name = ""
```

↓

Output

```
Guest
```

Sometimes this is **not** what we want.

Instead:

```jsx
const name = user.name ?? "Guest";
```

Now

```
user.name = ""
```

↓

Output

```
""
```

The empty string is preserved because it is a valid value.

---

## Common Interview Questions

### Why does this happen?

```js
console.log(false && expensiveFunction());
```

**Answer:**

`expensiveFunction()` is never called because `false` already determines the result of the entire `&&` expression.

---

### Why does this happen?

```js
console.log(true || expensiveFunction());
```

**Answer:**

The first operand is already truthy, so JavaScript immediately returns it without evaluating the function.

---

### Which operator should I use?

Use `||` when **any falsy value** should trigger a default.

Use `??` when **only `null` or `undefined`** should trigger a default.

---

## Gotchas

- `&&` and `||` return **actual operand values**, not just `true` or `false`.
- Functions on the right side may never execute because of short-circuiting.
- `||` treats `0`, `false`, `NaN`, and `""` as missing values.
- `??` preserves `0`, `false`, and `""`; it only falls back for `null` and `undefined`.
- You **cannot** directly mix `??` with `&&` or `||` without parentheses.

```js
// ❌ SyntaxError
null || undefined ?? "Guest";
```

Correct:

```js
// ✅
(null || undefined) ?? "Guest";
```

This is because JavaScript requires you to explicitly define the order of evaluation when combining these operators.