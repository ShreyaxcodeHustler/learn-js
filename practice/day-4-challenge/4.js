/*Convert declaration to arrow
Convert this into an arrow function, keeping behavior identical:
jsfunction isEven(num) {
  return num % 2 === 0;
}*/

const isEven= num => {
    return num%2===0;
}

console.log(isEven(20));
