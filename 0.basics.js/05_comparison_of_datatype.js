console.log(2 > 1)                //true
console.log(2 >= 1)                //true
console.log(2 < 1)                //false
console.log(2 == 1)               //false
console.log(2 != 1)                //true



console.log("2" > 1)                //true
console.log("02" > 1)                //true


console.log(null > 0)                //false
console.log(null < 0)                //false
console.log(null == 0)                //false
console.log(null >= 0)                //true     //because comparision operator treat null as number => [0] so that's why {null[0] >= 0} 



console.log(undefined >= 0)                //false
console.log(undefined <= 0)                 //false
console.log(undefined == 0)                 //false
console.log(undefined > 0)                 //false
console.log(undefined < 0)                 //false



//=> ===    //also check the datatype as well as value! 

console.log(2 == '2')                 //true
console.log(2 === '2')                //false



