// //for of loop

// // ["","",""]
// // [{},{},{}]

// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)
// }


// const name="priyanshu rawat"
// for (const i of name) {
//     if(i == " "){
//         break;
//     }
//     console.log(i)
// }




// //maps           -> key value pair!!        // unique      //sequential 

// const map=new Map()
// map.set('py',13.5)
// map.set('coa',11.5)
// map.set('sensor',9.5)
// map.set('ds',12)
// map.set('py',13.5)


// console.log(map);

// for(const [key,val] of map){
//     console.log(key,'  -  ',val)
// }



//// -> error                          for in   ->   obj ✅                 for of   ->  ✅ / map ✅
// const myobj={
//     user:{
//         name:"shakshi",
//         DOB:"16/01/2004"
//     },
//     owner:{
//         name:"priyanshu",
//         DOB:"21/08/2006"
//     },
// }

// for(const [key,val] of myobj.user){
//     console.log(key,'  -  ',val)
// }


// const lang={
//     'c++':'.cpp',
//     c:'.c',
//     python:'.py',
//     java:'.java',
//     javascript:'.js'
// }

// for (const i in lang) {
//     console.log(i)
// }


let arr=['a','b','c']
for(const i in arr){
    console.log(arr[i])
}

