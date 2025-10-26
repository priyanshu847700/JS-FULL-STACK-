//*********************************  #primitive datatypes!!  *********************************

// 7 types!!

// 1 String
// 2 Number
// 3 Boolean
// 4 null
// 5 undefined
// 6 Symbol
// 7 BigInt


let name="priyanshu"

let age=18

let IsloogedIn=false

let Pass=null

let score;

let userName1=Symbol('priyanshu_8099')
let userName2=Symbol('priyanshu_8099')
console.log(userName1 === userName2);

const bigintNumber=23454321543563467879n
console.log(typeof bigintNumber)



//****************************************  #Refrence types!!  *****************************************

// Arrays, Objects, Function!!





let arr=[1,2,3,4]
console.log(typeof arr)                 //object


let usersDetails={
    username:"priyanshu_8099",
    password:1234,
    DOB:'21/08/2006',
}
console.log(typeof usersDetails)            //object
console.log(usersDetails)              // { username: 'priyanshu_8099', password: 1234, DOB: '21/08/2006' }


console.table(usersDetails)
// ┌──────────┬──────────────────┐
// │ (index)  │ Values           │
// ├──────────┼──────────────────┤
// │ username │ 'priyanshu_8099' │
// │ password │ 1234             │
// │ DOB      │ '21/08/2006'     │
// └──────────┴──────────────────┘


let fxn1=function fxn() {
    console.log('hello world')
}
fxn1()                              //hello world
console.log(typeof fxn1)            //function