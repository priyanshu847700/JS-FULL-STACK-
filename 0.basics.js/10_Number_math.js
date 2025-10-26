const num=100
console.log(num)                            //100

const newnum= new Number(num)               //[Number: 100]
console.log(newnum);

console.log(typeof newnum.toString());      //string
console.log(newnum.toString().length);      //3
console.log(newnum.toFixed(3));             //100.000   ->  decimal value indicate krta hai


let anothernum=13.56

console.log(anothernum.toPrecision(1));     //1e+1          
console.log(anothernum.toPrecision(2));     //14
console.log(anothernum.toPrecision(3));     //13.6
console.log(anothernum.toPrecision(4));     //13.56


let hundreds=10000000
console.log(hundreds.toLocaleString())              //10,000,000      ->US Standard
console.log(hundreds.toLocaleString('en-IN'))       //1,00,00,000     ->Indian Standard


console.log(Number.MAX_VALUE)                       //1.7976931348623157e+308
console.log(Number.MIN_VALUE)                       //5e-324
console.log(Number.MAX_SAFE_INTEGER)                //9007199254740991
console.log(Number.MIN_SAFE_INTEGER)                //-9007199254740991





// -----------------------------------------------   MATHS     ------------------------------------------------------

console.log(Math);                              // Object [Math] {} -> it is a inbuild libraray in js
console.log(Math.abs(-4.6));                    // 4.6
console.log(Math.round(44.5));                  // 4
console.log(Math.ceil(4.01));                   // 5
console.log(Math.floor(4.9));                   // 4
console.log(Math.sqrt(4));                      // 2
console.log(Math.pow(4,3));                     // 64
console.log(Math.min(4,5,3,-5,2,-1,0));         // -5
console.log(Math.max(4,5,3,-5,2,-1,0));         // 5

console.log(Math.floor(Math.random()*10+1));    // 1,2,3,4,5,6,7,8,9,10

const min=10
const max=20

console.log(Math.floor(Math.random()* 10 + 1)+min); 






