console.log(x);
var x = 1;
//undefined, var is hoisted and initialized with undefined

console.log(y);
let y = 2;
//referenceError, TDZ — let is hoisted but not initialized

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
  /*var is function-scoped, not block-scoped. 
  There's only one i shared across all loop iterations. 
  By the time the setTimeout callbacks actually run (after the loop finishes, because setTimeout is async), 
  i has already reached 3 (the value that failed the i < 3 condition). 
  All three callbacks are closing over the same i, and they all see its final value.*/
}//var i:3, var i:3, var i: 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
  /*let is block-scoped, so JS creates a new j for every single iteration of the loop. 
  Each setTimeout callback closes over its own independent j, 
  capturing the value it had during that specific iteration*/
}//let j: 0, let j: 1, let j: 2