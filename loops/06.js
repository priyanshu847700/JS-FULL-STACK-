const num=[12,3,4,5,5,6,7,7,5,4,3]

// let ans=num.map((n)=> n*10)
// let ans=num.map((n)=> { return n*10})
// console.log(ans)

const newnum=num
             .map((n)=> n*10 )                      //[120, 30, 40, 50, 50, 60, 70, 70, 50, 40, 30]
             .map((m) => m+1)                       //[121, 31, 41, 51, 51, 61, 71, 71, 51, 41, 31]
             .filter((o) => o>55)                   //[ 121, 61, 71, 71 ]

console.log(newnum)


