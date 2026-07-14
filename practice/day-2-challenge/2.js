/* Primitive vs Reference demo
Write a function demoTypes() that proves, with actual code and console.logs, that:

Reassigning a copied primitive doesn't affect the original
Mutating a copied object/array does affect the original
Show the "fix" for the object case using spread ({...obj}) to break the reference*/

function demoTypes(){
    let a=5;
    let b=a;//copied variable

    b=10;//reassignment 
    console.log(a);//5, a stays the same
    console.log(b);//10

    let obj1={
        value:5,
    };

    let obj2= obj1;//copied variable, it refers to the same memory address
    console.log(obj1);//original object, {value:5}
    obj2.value=10;//change the value of obj2 , copied variable
    console.log(obj1);//changes in obj1 as well. {value: 10}


}

demoTypes();

