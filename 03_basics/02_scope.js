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

    // console.log("inside scope or Local Scope = ", scope1)
} //bLock scope  

// let check scope 
//  console.log("global=" ,scope1) //ok
// console.log(scope2) // ok
// console.log(scope3) // not ok it run ///ans 3

//nested scope 
/*
Note: this is also called closure
*/
//example

function one (){
  const userName ="rahul"

  function two (){
    const userEmail = "example@gmail.com"
    console.log("Parent variable value= ",userName) // can access parent variable
  }
  // console.log(userEmail) // can't access child variable
  two() // executed function two

}

 one() //executed function one

  // let see in if 

  if(true){
    const fName = "rahul "
    if(fName === "rahul "){
      const lName = "Chaudhary"
      console.log(fName + lName)
    }
    // console.log(lName) // can't access from child 
  }
  // console.log(fName) // can't access out side scope 

  //now let see which way can your function can access data and not let see


  console.log("before: ",tryingToAccessfromdirectfunction(5))

  function tryingToAccessfromdirectfunction (num){
    console.log("direct function")
    return(num)
  }
  console.log("after : ",tryingToAccessfromdirectfunction(6))



  // console.log("before: ",tryingToAccessFromVariableUsingFunction(8)) // can't access value 
const tryingToAccessFromVariableUsingFunction = function (num){
  console.log("using variable ")
  return num
}
console.log("after: ",tryingToAccessFromVariableUsingFunction(8)) //can access value

  