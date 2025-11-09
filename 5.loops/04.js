// foreach loop

const lang=["java","python","c","c++","sql","javascript","typescript"]
// lang.forEach( function (item) {
//     console.log(item)
// })



// lang.forEach( (item)=> {
//     console.log(item)
// })



// function printme(){
//     console.log(lang)
// }
// lang.forEach(printme);

lang.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})





const mycode=[
    {
        language:"javascript",
        filename:".js"
    },
    {
        language:"c++",
        filename:".cpp"
    },
    {
        language:"python",
        filename:".py"
    }
]

mycode.forEach((item)=>{
    console.log(item.language);
    console.log(item.filename);
})
