/*Build a safeAdd function
Write a function that takes two arguments and adds them only if both are numbers —
 otherwise it should return "Invalid input". Use typeof to check. 
 Test it with numbers, strings, booleans, and null.*/

 function safeAdd(a,b){
    if (typeof a==="number" && typeof b==="number"){
        return a+b
    }else{
        return "Invalid Input"
    }
 }

 let result= safeAdd(5,3);//8

 console.log(result);