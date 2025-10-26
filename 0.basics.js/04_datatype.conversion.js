let age="23abc"
 
console.log(typeof(age));    //string

let AgeInNumber=Number(age);

console.log(typeof AgeInNumber);         //number
console.log(AgeInNumber);                //NaN


//"23" => 33
//false => 0
//"33abc" => NaN
//undefined => NaN
//true => 1



let IsloogedIn = "priyanshu"
 
let booleanInLoggedIn=Boolean(IsloogedIn);
console.log(booleanInLoggedIn);                  //true


//1 => true
//0 => false
//"" => false
//"priyanshu" => true

let number=33

let numberInString=String(number)
console.log(numberInString);                  //33
console.log(typeof numberInString);                  //String
