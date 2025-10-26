
// *************************.     IMMEDIATELY INVOKED FUNCTION EXPRESSION.  -> ()()     ***************************

//use -> remove global scope pollution

// IIFE -> ()();                  -> [;] bcoz it dont know when to stop so semicolon is must !!  

(function chai(){
    console.log('DB connected');
})();

//arrow FXN IIFE!! 

( (name) => {
    console.log(`DB connected to ${name}`);
}) ('database')







