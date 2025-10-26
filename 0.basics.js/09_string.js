const name='priyanshu'
const surname=' rawat'
console.log(name[0]);             //p

// console.log("my name is "+name+surname)         //outdated version
console.log(`my name is ${name} ${surname}`)                           //my name is priyanshu  rawat


const book = new String("SPARSH-go")
console.log(book[0]);                  //S   -> index val batata hai

console.log(book.__proto__);            //{}

console.log(book.length);               //6    -> length btata hai string ki

console.log(book.toLowerCase());        //sparsh-go  -> Lower case meh kr dega puri string!!

console.log(book.toUpperCase());      //SPARSH-GO  -> upper case meh kr dega puri string!!

console.log(book.charAt(1));          //P   -> index no. dedo to uspe character value btata hai!

console.log(book.indexOf('H'));          //5  -> character value dedo to uspe index no. btata hai!

console.log(book.substring(0,3));          //SPA    -> string ko substing meh tod deta hai or 2 params leta hai (startIdx,lastIdx) or last index count nhi hoti

console.log(book.slice(-8,3));          //PA     ->same kam karta hai pr negative value bhi access kr skte hai isme

console.log(book.replace("SP",""));          //ARSH-go -> replace kr deta hai string ho ya char do params leta hai

console.log(book.includes('SPA'));          //true   -> btata hai ki element exist krta hai string meh ya nahi

console.log(book.includes('kalia'));          //false 

console.log(book.split('-'))          // [ 'SPARSH', 'go' ]     -> jaha bhi [-] ye symbol aye vaha se split kr deta hai string ko

console.log(book.concat(name))          //SPARSH-gopriyanshu   -> do string ko jodne ke kam ata hai

console.log(book.bold())          //<b>SPARSH-go</b>    ->bold kr deta hai text ko!!






let nam='      priyanshu rawat          '

console.log(nam);                     //      priyanshu rawat 
console.log(nam.trim());              //priyanshu rawat   -> white spaces ko trim kr deta hai!! 
