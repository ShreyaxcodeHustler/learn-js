Day 2: Data Types & Type Coercion
1. Primitive vs Reference types
JS has two categories of data:
Primitives (stored by value): string, number, boolean, undefined, null, symbol, bigint
jslet a = 5;
let b = a; // b gets a COPY of 5
b = 10;
console.log(a); // 5 — a is untouched
Reference types (stored by reference): object, array, function
jslet obj1 = { val: 5 };
let obj2 = obj1; // obj2 points to the SAME object in memory
obj2.val = 10;
console.log(obj1.val); // 10 — obj1 changed too!
This is exactly why you had to use spread ({...oldState}) instead of direct mutation in your React state updates — mutating a reference type mutates the original, which breaks React's ability to detect a state change.
2. typeof operator
jstypeof "hello"     // "string"
typeof 42          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← famous JS bug, been there since 1995, never fixed
typeof {}            // "object"
typeof []            // "object"  ← arrays are objects!
typeof function(){}  // "function"
3. Type coercion
JS is weakly typed — it converts types automatically in certain operations, which leads to a lot of "weird JS" memes.
js"5" + 3        // "53"  — number coerced to string, then concatenated
"5" - 3        // 2     — string coerced to number, then subtracted
"5" * "2"      // 10    — both coerced to numbers
true + 1        // 2     — true coerced to 1
false + 1       // 1
null + 1        // 1     — null coerced to 0
undefined + 1   // NaN   — undefined coerces to NaN, not 0

[] + []          // ""    — both arrays coerced to strings, concatenated
[] + {}          // "[object Object]"
Rule of thumb: + prefers string concatenation if either operand is a string. -, *, / always try to coerce to numbers.
4. == vs ===
js"5" == 5     // true  — loose equality coerces types before comparing
"5" === 5    // false — strict equality checks type AND value, no coercion

null == undefined    // true  (special case)
null === undefined   // false

0 == false    // true
0 === false   // false
Best practice: Always use === unless you have a specific, deliberate reason to use ==. Interviewers will ask you to explain the difference and give examples like the ones above — this is one of the most common JS interview questions there is.
5. Falsy and truthy values
Only 8 falsy values in JS — everything else is truthy:
jsfalse, 0, -0, 0n, "", null, undefined, NaN
Tricky truthy values people get wrong:
jsBoolean("0")        // true  — non-empty string, truthy!
Boolean([])          // true  — empty array is truthy!
Boolean({})           // true  — empty object is truthy!

📖 Reading (MDN, ~20 min)

JavaScript data types and data structures - MDN
Equality comparisons and sameness - MDN

