//fix the bug
function createCounters() {
  var counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(function() { return i; });
  }
  return counters;
}
const counters = createCounters();
console.log(counters[0](), counters[1](), counters[2]()); // what do you expect vs what happens?

//above code gives var i:3, var i: 3, var i: 3

//fixed code
function createCounters() {
  var counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(function() { return i; });
  }
  return counters;
}
const counters = createCounters();
console.log(counters[0](), counters[1](), counters[2]());