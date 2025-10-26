// // Singolton      -> object.create


const mysymbol= Symbol("key1")


// //Object Literals
const user={
    name:'priyanshu',
    [mysymbol]: Object("mykey1"),
    age:19,
    DOB:'21/08/2006',
    Email:'priyanshu123@gmail.com',
    'full name':"priyanshu rawat"
}


// console.log(user.name);           //priyanshu
// console.log(user['name']);        //priyanshu


// // console.log(user.full name);           // err
// console.log(user["full name"]);           // priyanshu rawat
// console.log(user[mysymbol]);              // [String: 'mykey1']
// console.log(typeof user[mysymbol]);       // object


// user.Email="Shakshi2004@gmail.com"
// console.table(user)       

// // ┌───────────┬─────────────────────────┐
// // │ (index)   │ Values                  │
// // ├───────────┼─────────────────────────┤
// // │ name      │ 'priyanshu'             │
// // │ age       │ 19                      │
// // │ DOB       │ '21/08/2006'            │
// // │ Email     │ 'Shakshi2004@gmail.com' │
// // │ full name │ 'priyanshu rawat'       │
// // └───────────┴─────────────────────────┘

// Object.freeze(user)           //-> avoid changes
// user.Email="archana1980@gmail.com"
// console.table(user)

// // ┌───────────┬─────────────────────────┐
// // │ (index)   │ Values                  │
// // ├───────────┼─────────────────────────┤
// // │ name      │ 'priyanshu'             │
// // │ age       │ 19                      │
// // │ DOB       │ '21/08/2006'            │
// // │ Email     │ 'Shakshi2004@gmail.com' │
// // │ full name │ 'priyanshu rawat'       │
// // └───────────┴─────────────────────────┘


user.greeting=function(){
    console.log(`hello JS User ${this.name}`);   
}
console.log(user.greeting);      //[Function (anonymous)]
console.log(user.greeting());    //hello JS User priyanshu       // undefined


