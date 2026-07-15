//rewrite with ternary

/*function checkAge(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "minor";
  }
}*/

function checkAge(age){
    const agecheck=age>=18 ? "adult": "minor";
    return agecheck
}

console.log(checkAge(20));

