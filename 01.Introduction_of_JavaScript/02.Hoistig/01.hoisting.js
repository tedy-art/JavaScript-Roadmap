/*
Hoisting-
Hoisting is a concept which enables us extract values of vaiables and functions even before inithializing/ assgingning values without getting error and 
this is happening due to the 1st phase of the execution context.
*/
//hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist()
console.log(a);//10
console.log(b);//ReferanceError: b is not defined.
