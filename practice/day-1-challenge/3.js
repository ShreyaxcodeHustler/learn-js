//actual coding challenge
/*
function describeScope() {
   demonstrate var vs let in a loop
   demonstrate var vs let/const in a block
   demonstrate var "leaking" out of a function
   comment each part explaining what's happening
}*/

function describeScope() {
  // demonstrate var vs let in a loop
  for (var i=0; i<3;i++)
  {
    console.log("var i:", i);
  }
  for(let j=0; j<3; j++){
    console.log("var j:", j);
  }
  // demonstrate var vs let/const in a block
    function blockDemo() {
    if (true) {
        var x = 9;
        let a = 3;
        console.log("inside block:", x, a); // both accessible here
    }
    console.log("outside block, x:", x); // 9(leaks out of the if block- function scoped)
    console.log("outside block, a:", a); // referenceError(outside the if block)
    }
    blockDemo();
  var x=9;
  console.log(x);

  /*console.log(y);
  var y=10;*/

  let a=3;
  console.log(a);

  /*console.log(b);
  let b=2;*/

  // demonstrate var "leaking" out of a function
  function varLeak(){
    if(true){
        var c=8;
    }
    console.log(c);//var-8 leaks out of the if block
  }
    varLeak();

}