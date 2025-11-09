// const lang=["java","python","c","c++","sql","javascript","typescript"]

// lang.forEach((i)=>{                     //forEach loop never returns a value!!
//     console.log(i);
//     return i
// })




// const mynums=[1,2,3,4,5,6,7,8,9]

// // let filternum = mynums.filter( (num) => num > 4 )
// let filternum = mynums.filter( (num) => {
//     return num > 4 
// })
// console.log(filternum);


// let newnum=[]
// mynums.forEach((i)=>{
//     if(i>4){
//         newnum.push(i)
//     }    
// })
// console.log(newnum);



const book=[
    { title: "book one" , genre: "fiction" , publish: 1981 , edition : 2004},
    { title: "book two" , genre: "non-fiction" , publish: 1992 , edition : 2008},
    { title: "book three" , genre: "history" , publish: 1999 , edition : 2007},
    { title: "book four" , genre: "non-fiction" , publish: 1989 , edition : 2010},
    { title: "book four" , genre: "science" , publish: 2009 , edition : 2014},
    { title: "book four" , genre: "fiction" , publish: 1986 , edition : 1996},
]

let k=book.filter((item) => item.genre === "non-fiction")
let l=book.filter((item) => (item.edition > 2008) && (item.genre === "science"))

console.log(k);

// [                                           //output
//   {
//     title: 'book two',
//     genre: 'non-fiction',
//     publish: 1992,
//     edition: 2008
//   },
//   {
//     title: 'book four',
//     genre: 'non-fiction',
//     publish: 1989,
//     edition: 2010
//   }
// ]

console.log(l);

// [                                        //output
//   {
//     title: 'book four',
//     genre: 'science',
//     publish: 2009,
//     edition: 2014
//   }
// ]

