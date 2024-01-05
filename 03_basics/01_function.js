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


// ++++++ let learn now other type of parameter in function +++++

//let assume you are making shoping card you want to add new product repeatly.but you don't know how many product will add.

function addProductCart (...productName) {
 return productName  
}

// Now Let assume you want to add productname more than 2 
// console.log(addProductCart('t-shirt', 'shirt')) // ans t-shirt 

// so here come concept of rest which is simiary to spread (...productName)
// console.log(addProductCart('t-shirt', 'shirt'))  //come in array form [ 't-shirt', 'shirt' ]
 

// passing object in function

const user = {
    userName: "rahul",
    email: "example@gmail.com"
}

function objectPassingInFunction (userInfo){
    console.log(`userName= ${userInfo.userName} and email = ${userInfo.email}`)
    return userInfo
}

// 1st Way 
// console.log(objectPassingInFunction(user))

// 2nd Way
// console.log(objectPassingInFunction({
//     userName: "Tom",
//     email: "Tom@gmail.com"
// }))


// passing Array in function

const userdB = [
    'Rahul',
    'example@gmail.com'
]

function arrayPassingInFunction (userinformation){
    return userinformation
}
// 1st way
// console.log(arrayPassingInFunction(userdB))

// 2nd way
// console.log(arrayPassingInFunction([
//     150,
//     200,
//     300
// ]))