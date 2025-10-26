const marvel=["iron man","ant man","thor"]
const dc=["superma","flash","batman"]

// METHOD - 1
// console.log(marvel.push(dc))          
// console.log(marvel)                   //[ 'iron man', 'ant man', 'thor', [ 'superma', 'flash', 'batman' ] ]    //array of array!!
//cosole.log(marvel[3][0])               //flash

// METHOD - 2
let allheros=marvel.concat(dc)
console.log(allheros)            //[ 'iron man', 'ant man', 'thor', 'superma', 'flash', 'batman' ]

// METHOD - 3
// -> spread method !!     -> uthne dot jitne element us array meh!!
console.log([...marvel, ...dc])           //[ 'iron man', 'ant man', 'thor', 'superma', 'flash', 'batman' ]

// METHOD - 4
const arr2=[1,2,3,4,[5,6,7],[5,6],[8,9]]
console.log(arr2.flat(Infinity))                  //[ 1, 2, 3, 4, 5, 6, 7, 5, 6, 8, 9]



console.log(Array.isArray('priyanshu'))       //false
console.log(Array.from('priyanshu'))       //[ 'p', 'r', 'i', 'y', 'a', 'n', 's', 'h', 'u']
console.log(Array.from({name:'priyanshu'}))       //[]
  
 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))                 // [ 100, 200, 300 ]
