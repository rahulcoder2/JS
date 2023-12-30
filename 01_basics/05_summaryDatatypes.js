/*
    Datatype are two type primitive and Non-Primitive 
*/


/*
// # Primitive (Call by value)

    7 type :
        1. String
        2. Number
        3. Boolean
        4. Null
        5. Undefined
        6. Symbol
        7. BigInt
*/

        // For example 
    
    const string = " rahul"
    const number = 33.44
    const isloggedIn = false
    const temp = null
    let userEmail;
    const bigNumber = 1234598979949n
    const userId = Symbol("1234")
    const user1Id = Symbol("1234")
    // let check let symbol is different with each other 
    console.log(user1Id === userId)

/*
// # Non-Primitive (Call by reference)
    their reference value can be allocated to you in memory

    3 type :
        1. Object
        2. Array
        3. Function
*/

// example

const myArray = ["apple", "mango", "peanut"]

const myObject = {
    name: "rahul",
    age: 22,
}

const myFunction = function (){
    console.log("my function")
}

//  check datatype

console.table([typeof(string),typeof(number),typeof(isloggedIn),typeof(temp), typeof(userEmail), typeof(userId), typeof(bigNumber), typeof(myArray), typeof(myObject), typeof(myFunction)])

/*
    Note: this is 14th edition, June 2023
        if you want to know full detail datatype to all Primitive and Non-Primitive then you can check:
        https://262.ecma-international.org/#sec-typeof-operator

*/