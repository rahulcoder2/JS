// Function

/*
    Note: function is package of all code in single package which help to call anytime to run
*/

// example:
 
// all code to run 

// console.log("R")
// console.log("a")
// console.log("h")
// console.log("u")
// console.log("l")


// How to declar function 

//  in package form 

function myName() {
  console.log("R");
  console.log("a");
  console.log("h");
  console.log("u");
  console.log("l");
}

// access function 
// myName()// this execute value 
// myName // this give reference


// let learn other way to use function

//let find sum to two number 

function sum (num1, num2){
    console.log(num1 + num2)
}

// sum() // give NaN  because we haven't give argument
// sum( 2, 3)  // ans 5
// sum(2, " a") // ans 2a because of js conversion how Js done.

// now let assume we are storing in variable 

// const result = sum( 2, 5)
// console.log("result: " ,result) // undefined

// there come now intresting concept of return Let see example

function multiple (num1, num2){
    //one way 
    // let mult = num1 * num2 // before return Line it executed
    // return mult
    // console.log("no return") //Unreachable code detected

    // two way 
    return (num1 * num2)
}

// const mult = multiple(2,5)
// console.log("RESULT: ", mult)


// some more example 

// Let take function name isLoggedIn and show msg userName is loggedin

function isLoggedIn(userName) {
    return `${userName} is LoggedIn in Js course`
}

// isLoggedIn("Rahul") // this only executed value doesn't print
// console.log(isLoggedIn("Rahul")) // this will print executed value  

//now Let assume we didn't give argument then let see from example 

function noArgument (userName) {
    // 1st way
    // if(userName === undefined) {
    //     console.log(` username don't have argument`)
    //     return
    // }

    // 2nd way 
    if(!userName) {
        console.log(` username don't have argument`)
        return
    }
    return `${userName} username have argument`
}

// console.log(noArgument())


// now Let assume we give default parameter then let see from example

function defaultParameter (userName = "defaultUser"){
    
    if(!userName) {
        console.log(` username don't have argument`)
        return
    } // this code will not run because of defaultParameter and username will never be undefined
    return `${userName} username `
}

// console.log("defaultParameter = ", defaultParameter()) 
// console.log("overWriteParameter = ", defaultParameter("rahul")) 
