//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory => (Primitive) => copy     ,    Heap memory => (Non-Primitive) => refrences


let name='priyanshu'

let anotherName=name 
anotherName='rawat'

console.log(anotherName)    //rawat
console.log(name)          //priyanshu



let user1={
    name:"priyanshu",
    upiId:"priyanshu@123upi"
}

let user2=user1
user2.name='shakshi'      //dono meh name change ho gaya!!

console.table(user1)
// ┌─────────┬────────────────────┐
// │ (index) │ Values             │
// ├─────────┼────────────────────┤
// │ name    │ 'shakshi'          │
// │ upiId   │ 'priyanshu@123upi' │
// └─────────┴────────────────────┘

console.table(user2)
// ┌─────────┬────────────────────┐
// │ (index) │ Values             │
// ├─────────┼────────────────────┤
// │ name    │ 'shakshi'          │
// │ upiId   │ 'priyanshu@123upi' │
// └─────────┴────────────────────┘
