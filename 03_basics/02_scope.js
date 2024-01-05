// let scope1 = 1
// const scope2 = 2
// var scope3 = 3

// normal way to access from variable
// console.log(scope1)
// console.log(scope2)
// console.log(scope3)

//let assume using function/if to see how scope work {this is scope }

// let assume coder declare variable  outside scope

// var scope3 = 555 //global  scope// so let not take about var  
let scope1 = 3000

if (true) {
    // if this variable only run inside this scope it is ok but when it exit scope and run that is problem.
  let scope1 = 1;
  const scope2 = 2;
    // scope3 = 3; so not to use 

    console.log("inside scope or Local Scope = ", scope1)
} //bLock scope  

// let check scope 
 console.log("global=" ,scope1) //ok
// console.log(scope2) // ok
// console.log(scope3) // not ok it run ///ans 3