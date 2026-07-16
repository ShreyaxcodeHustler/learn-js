function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(2));//10
console.log(multiply(2, undefined));//10, default parameters only trigger when the argument is undefined
console.log(multiply(2, null));//0
console.log(multiply(2, 0));//0