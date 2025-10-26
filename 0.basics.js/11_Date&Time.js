//++++++++++++++++++++++++++++++++++++++++++++  DATES  ++++++++++++++++++++++++++++++++++++++++++++

let mydate= new Date() 
console.log(mydate.toString());                   // Fri Oct 24 2025 23:20:30 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());                   // Fri Oct 24 2025
console.log(mydate.toLocaleString());                   // 10/24/2025, 11:20:30 PM
console.log(typeof mydate);                   // object


let myCreatedDate= new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());                // Mon Jan 23 2023
console.log(mydate.toLocaleString());                     // 10/24/2025, 11:25:07 PM


let myCreatedDate1= new Date('2024-3-24')
console.log(myCreatedDate1.toDateString())                   // Sun Mar 24 2024



let timestamps=Date.now()

console.log(timestamps);                   //time in milliseconds  from 1/jan/1970
console.log(myCreatedDate.getTime());      //time in milliseconds  from 24/march/2024
console.log(Math.floor(timestamps/1000));  //time in seconds  from 1/jan/1970


const newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());
newDate.toLocaleString('default',{
    weekday: "long",
    
})