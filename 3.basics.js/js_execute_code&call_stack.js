//   Javascript Execution Context  --->    js run in two phases
// 1. Global Execution Context       -> this
// 2. Functional Execution Context
// 3. Eval Execution Context

//   Phases
// 1. Memory Creation Phase
// 2. Execution Phase


let val1=10
let val2=5
function addnum(num1,num2){
    return num1+num2
}

let res1=addnum(val1,val2)
let res2=addnum(4,5)
console.log(res1);         //15
console.log(res2);         //9
