function myFxn(){
    console.log('P');
    console.log('R');
    console.log('I');
    console.log('Y');
    console.log('A');
    console.log('N');
    console.log('S');
    console.log('H');
    console.log('U');
}

myFxn()





function add(a,b){
    console.log(a+b);   
}


add(3,4)          //7
add(3,'4')        //34
add(3,'a')        //3a
add(3,null)       //3
let result1=add(4,4) 
console.log('result1 : ',result1);     // result :  undefined -> kyuki console srif print krta hai value ko n ki return!





function add1(a,b){
    // let result= a+b
    // return result
    return a+b
    console.log('priyanshu')
}

const result=add1(4,4)
console.log('result : ',result);     // result : 8  




function loginUserMessage(username='sam'){
    if(!username){
        console.log('please enter the username!!')
        return
    }

    // if(username === undefined){
    //     console.log('please enter the username!!')
    //     return
    // }
    
    return `${username} just logged in`
    
}
 
console.log(loginUserMessage())              //sam just logged in
console.log(loginUserMessage('priyanshu'))   //priyanshu just logged in



function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(500,299,399,2000));           // [ 500, 299, 399 ,2000 ]  #// num1 -> [ 399, 2000 ]



const username={
    name:'priyanshu',
    course:'B.Tech'
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.name} currently persuing ${anyobj.course}`);
}

// handleObj(username)            // username is priyanshu currently persuing B.Tech

handleObj({                       // username is shakshi currently persuing MBA
    name:'shakshi',
    course:'MBA'
})



const arr=[1,2,3,34]

function returnSecondArray(getArray){
    return getArray[1]
}

console.log(returnSecondArray(arr))               //2
console.log(returnSecondArray([2,4,6,8]))         //4



