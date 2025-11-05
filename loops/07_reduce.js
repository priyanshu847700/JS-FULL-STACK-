// const num=[1,2,3]

// let total = num.reduce((acc,currVal) => {
//     console.log(`accumilator : ${acc} & current value : ${currVal}`)
//     return acc+ currVal
// },0)

// let total1 = num.reduce((acc,currVal) => acc+ currVal,0)

// console.log(total)
// console.log(total1)


const cart=[
    {
        itemName:"python",
        price:5000
    },
    {
        itemName:"gt-500",
        price:6000
    },
    {
        itemName:"book",
        price:3000
    }
]

let totalamount=cart.reduce( (acc,n)=> acc+n.price,0)
console.log(totalamount);

