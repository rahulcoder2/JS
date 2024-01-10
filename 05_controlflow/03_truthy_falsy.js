/*
    ################### Truthy and Falsy #####################
*/

// let assme we want to check database value of user is there or not

const userName = ''

if (userName) {
    // console.log("userName is avilable");
} else {
    // console.log("don't have userName");
}

// ans : don't have userName

const userNameArray = []

// if (userNameArray) {
//     console.log("userName is avilable");
// } else {
//     console.log("don't have userName");
// }

// note: not recomended to check array vaule we can check from another method let see in line 40

// ans: userName is avilable"


// here come concept of truthy and falsy 

// let see falsy value

// false, 0, "", -0, 0n, null, NaN, undefined

//let see truthy value

// all value which is not in falsy value, "0","false", " ", [], {}, function(){}

if(userNameArray.length == 0){
    // console.log("empty array ");
}else{
    // console.log("array have value");
}

// checking object 

const objectEmpty = {name: "rahul"}

if (Object.keys(objectEmpty).length == 0) {
    // console.log('object is empty');
} else {
    // console.log('have value in object')
} 

/*
    ++++++++++++++ Nullish coalescing Operator +++++++++++++++
*/

let someValue;

// someValue= 5 ?? 56
// someValue= null ?? 10
// someValue = undefined ?? 5
// someValue = null ?? 6 ?? 67

// console.log(someValue);

/*
    ++++++++++++ Terniary Operator ++++++++++++
*/

// syntax
// condition ? true : false

//let see example

const bookCost = 700

bookCost <= 600 ? console.log("Book price is less than 600") :  console.log("Book price is greater than 600");