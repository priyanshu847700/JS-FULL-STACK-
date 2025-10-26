
// // **********************************************  SCOPES  ****************************************************
 

var a=100               //     -> DO NOT FOLLOW LOCAL SCOPE
 var b=200
 var c=300

 if(true){
    var a=10;
    const b=20;
    let c=30;
    console.log('inner a :',a);      //10
    console.log('inner b :',b);      //20
    console.log('inner c :',c);      //30
    
}

console.log(a)             //10
console.log(b)             //200
console.log(c)             //300



function one(){
    const username="priyanshu"

    function two(){
        const website='youtube'
        console.log(username);
    }
    // console.log(website);         -> err

    two()
}
one()                        //priyanshu


if(true){
    const username='priyanshu'
    if(username === 'priyanshu'){
        const website='youtube'
        console.log(username+website)       //priyanshuyoutube
    }
    // console.log(website);       // -> err
}

// console.log(username);      -> err



// ++++++++++++++++++++++++++++++++++++++++++ insteresting +++++++++++++++++++++++++++++++++++++++
console.log(addone(4))           //5
function addone(num){
    return num+1
}
console.log(addone(4))            //5


//variable holding fXN!

// console.log(addTwo(4))            // -> err due to hoisting 
const addTwo=function(num){
    return num+2
}
console.log(addTwo(4))               //6



