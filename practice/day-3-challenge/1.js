console.log(5 || "backup");//5
console.log(0 || "backup");//backup
console.log(0 ?? "backup");//0
console.log("" ?? "backup");//""
console.log(null ?? "backup");//backup
console.log(false && "unreachable");//false
console.log("a" && "b" && "c");//c