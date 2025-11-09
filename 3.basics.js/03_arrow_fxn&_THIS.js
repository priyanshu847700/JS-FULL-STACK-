const username={
    name:'priyanshu',
    course:'B.Tech',

    welcomeMessage :function(){
        console.log(`Hello ${this.name} how can i help you today! `);
        console.log(this);                         //{ name: 'shakshi' , course: 'B.Tech' , welcomeMessage: [Function: welcomeMessage]}
    }
}
username.welcomeMessage()               //Hello priyanshu how can i help you today! 
username.name='shakshi'
username.welcomeMessage()               //Hello shakshi how can i help you today!

console.log(this);          // {} -> bcoz outside the scope!!



function fxn(){
    let username= "priyanshu"
    console.log(this.username)           //undefined
}
fxn()

const fxn1=function(){
    let username= "priyanshu"
    console.log(this.username)           //undefined
}
fxn1()


// // *********   this is only used inside object not in fxn or any other  *********//


//arrow fxn !!
const Chai = () => {
    let username= "priyanshu"
    console.log(this.username)            //undefined
}
Chai()



const addtwo1 = (n1,n2) => {
    return n1+n2
}
// or
const addtwo2 = (n1,n2) =>  n1+n2           
// or
const addtwo3 = (n1,n2) =>  (n1+n2)            
const addtwo4 = (n1,n2) =>  ({username:'priyanshu'})

console.log(addtwo1(3,4));                  //7
console.log(addtwo2(3,4));                  //7
console.log(addtwo3(3,4));                  //7
console.log(addtwo4(3,4));          //{ username: 'priyanshu' }


