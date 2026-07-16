/*Loop comparison
Given const arr = [10, 20, 30, 40];, write the same summation (add all values)
 three different ways: using for, for...of, and .reduce()
 (just try it even though we haven't covered reduce in depth yet — Day 8 will go deeper).*/
const arr=[10,20,30,40];
function usingFor(){
    let sum=0;
    for( let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

usingFor();

function usingForIn(){
    let sum=0;
    for( let value in arr){
        sum+=arr[value];
    }
    console.log(sum);
}
usingForIn();

function usingForOf(){
    let sum=0;
    for (const value of arr) {
        sum += value; // value IS the number already, no arr[value] needed
    }
    console.log(sum);
}

usingForOf();

/*.reduce() basics
reduce takes an array and "reduces" it down to a single value (a sum, a max, a merged object, anything) by running a function over each element and carrying forward an accumulated result.
jsarray.reduce((accumulator, currentValue) => {
  // return the new accumulator value
}, initialValue);

accumulator — the running total/result, carried from one iteration to the next
currentValue — the current array element being processed
initialValue — what the accumulator starts as (the second argument to reduce)

Walk through it manually for [10, 20, 30, 40] with initialValue = 0:
*/

function usingReduce() {
    const sum = arr.reduce((acc, curr) => {
        return acc+curr;
    }, 0);
    console.log(sum);
}

usingReduce();