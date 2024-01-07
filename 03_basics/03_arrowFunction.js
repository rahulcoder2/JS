/*
        ++++++++++++++++++++++++ This +++++++++++++++++++++++++
*/ 

// let assume you make object for buyer of course

const user = {
    name : "tom",
    price: 555,
    welcomeMsg: function(){
        // console.log(`${name}, Welcome to your course`) // name can't access
        console.log("what this can access: ",this); // this help to refer current content of scope 
        console.log(`${this.name}, Welcome to your course`) // this help to access current content of name.
    }
}

// user.welcomeMsg()

// Now let check value and see what will be 

user.name = "jerry"

// user.welcomeMsg()
 
 // this show empty object in node but if we run in browser we will get {list of object like window, global, etc}
//  console.log("what this can access: ",this);


//now let check can we access this from function 

function accessThisfromFunction (){
    console.log(this);
}

// accessThisfromFunction() // it access

function accessValueofVariableFromThisINFunction(){
    const userName = "Rahul"
    console.log(this); // can access
    console.log(this.userName); //can't access value of userName
}

// accessValueofVariableFromThisINFunction() //Undefined

//another way 

const anotherWayaccessValueofVariableFromThisINFunction = function (){
    const userName = "Rahul"
    console.log(this); // can access
    console.log(this.userName); //can't access value of userName
}

// anotherWayaccessValueofVariableFromThisINFunction() //Undefined

 /*
        ++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++
*/

//declare Arrow function

const arrowFunction = ()=>{
    const userName = "Rahul"
    console.log(this); // can access
    console.log(this.userName); //can't access value of userName
}

// arrowFunction() //undefined 

// way of declare 

const firstWayArrowFunction = (num1, num2) => {
    return num1 + num2 // explicit return, we have to write return
}
// console.log(firstWayArrowFunction(2,8));

const secondWayArrowFunction = (num1, num2) => num1 + num2 // implicit return 
// console.log(secondWayArrowFunction(2,7));

const thirdWayArrowFunction = (num1, num2) => (num1 + num2) // implicit return, It assume Return is written

// console.log(thirdWayArrowFunction(2,6));

