
// //array!!

let arr=['priyanshu',1,2,3,'rawat',99.56,true,false]
// console.table(arr)

// //array methods!!

// arr.push(6)       // -> to add an element from last
// arr.pop()        // -> to delete an element from last
// arr.unshift(9)   //  -> to add an element from first
// arr.shift()      // -> to delete an element from first
// console.table(arr) 
// console.table(arr.includes(3))                // true
// console.table(arr.indexOf('priyanshu'))       // 0
// console.table(arr.indexOf('rawat'))           // 4



let newarr=arr.join()                    // -> used to convert an arr into string!!
console.table(arr)   
console.table(typeof arr)                // object
console.table(newarr)                    // priyanshu,1,2,3,rawat,99.56,true,false
console.table(typeof newarr)             // string




let arr1=[1,2,3,4,5,6]
console.log(arr1)                   // [ 1, 2, 3, 4, 5, 6 ]

let arr2=arr1.slice(1,3)            // -> it don't changes the original array [call by value]
console.log(arr1)                   // [ 1, 2, 3, 4, 5, 6 ]
console.log('A',arr2)               //  A [ 2, 3 ]

let arr3=arr1.splice(1,3)           // -> it changes the original array [call by reference]
console.log(arr1)                   // [ 1, 5, 6 ]
console.log('B',arr3)               // B [ 2, 3, 4 ]

