/*
    ++++++++++++++++++ IF ++++++++++++++++++++++
*/

// syntax 

// if (condition) {
//     scope
// }

// how to run and not to run if condition 

if (true){
    // console.log("run")
}

if (false){
    console.log("will not run ")
}


// let learn more way to check value using operator

// <, >, <=, >=, ==, !=, ===, !==

if (3 > 2){
    // console.log("run")
}

// let assume you want to executed code if this than this else that .let see in example and you write 

const temp = 26
if(temp <= 25 ){
    // console.log("cold") // it will executed when condition is true
}
// console.log("temp is less than 15") // this will also executed while try to run check so, there come concept of ifelse let see in example.

if(temp <= 25){
    // console.log(`today temp is cold .${temp}`)
}else{
    // console.log(`today is hot. ${temp} `)
}


// let check in scope 

const score = 500
if(score == 500){
    const power = "light"
    // console.log(`your power is ${power}`)
}
// console.log(`your power is ${power}`)// cant access due to scope


// let learn now how to handel two or more condition

const balance = 1000

if (balance < 500) {
    // console.log("balance is less than 500")
} else if (balance < 700) {
    // console.log("less than 700")
}else{
    // console.log("less than 2000")
}

// let see real world example 
 
const userIsLoggedIn = true
const cardinfo = true

if (userIsLoggedIn && cardinfo) {
    console.log("allowed to shop in online store")
} else {
    console.log("is not allowed to shop in online store")
}

// same way if you want to login from any one of give variable we can see from this example 

const logInFromEmail = true
const logInFromGoogle = false

if (logInFromEmail || logInFromGoogle) {
    console.log("allowed to shop in online store")
} else {
    console.log("is not allowed to shop in online store")
}

