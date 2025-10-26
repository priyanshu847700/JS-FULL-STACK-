// const tinderuser=Object()
const tinderuser={}
tinderuser.username="123abc"
tinderuser.Email="priyanshu123@gmail.com"
tinderuser.PhoneNo=7266827739

console.log(Object.keys(tinderuser))             // [ 'username', 'Email', 'PhoneNo' ]
console.log(Object.values(tinderuser))           // [ '123abc', 'priyanshu123@gmail.com', 7266827739 ]
console.log(Object.entries(tinderuser))           //[ [ 'username', '123abc' ], [ 'Email', 'priyanshu123@gmail.com' ], [ 'PhoneNo', 7266827739 ] ]
console.log(tinderuser.hasOwnProperty('PhoneNo'))           //true


// console.log(tinderuser);      //{}


const regularuser={
    Email:"some@gmail.com",
    username:{
        userfullname:{
            firstName:"priyanshu",
            secondName:"rawat",
        } 
    }
}
console.log(regularuser);    // { Email: 'some@gmail.com', username: { userfullname: { firstName: 'priyanshu', secondName: 'rawat' } } }
console.log(regularuser.username.userfullname);        // { firstName: 'priyanshu', secondName: 'rawat' }


const obj1={1:'a',2:'b'}
const obj2={4:'d',3:'c'}
// method - 1
console.log(Object.assign({},obj1,obj2))      //(tar,sources,sources)       // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// method - 2
console.log({...obj1,...obj2})               //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 

const course={
    coursename:"JS in Hindi",
    price:'999',
    courseInstructor:'hitesh'
}

 
// **********************************************************************************************************

//Object de - structure !!
const {courseInstructor : instructor} =course
console.log(instructor);               //hitesh

// ++++++++++++++++++++++++++++++++++++       JSON - API       +++++++++++++++++++++++++++++++++++++++++++++++

// {
//     "name" : "priyanshu rawat",
//     "course" : "btech",
//     "branch" : "CSE(AI & ML)"
// }


// [
//     {},
//     {},
//     {}
// ]

