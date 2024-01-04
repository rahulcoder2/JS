/*  ====== Object ========   */

//  1. literal
// it make multiple instance of object
//  2.constructor(singleton )
// this make make only one kind of object in constructor

// singleton Object
// Object.create()

// literal object

// how to declare Object

const mysymbol = Symbol("=>");
const user = {
  name: "rahul",
  "Full Name": "Rahul Chaudhary",
  age: "22",
  email: "example@gmail.com",
  isLoggedIn: false,
  [mysymbol]: "symbol",
};

// Accessing Object

// console.log(user.name);
// console.log(user["Full Name"])
// console.log(user[mysymbol])
// console.log(user)

// changing value in object

user.email = "example2@gmail.com";
// console.log(user)

// freeze changed value in object

// Object.freeze(user)
// user.email = "example3@gmail.com"
// console.log(user)

// how to add function in object

user.greeting = function () {
  // accessing same object reference value using key use this
  console.log(`hello world, my name is ${this["Full Name"]}`);
};

// console.log(user.greeting); // this give full function reference
// console.log(user.greeting()); // this give argutated  value of function

// Singleton object

//  how declare in Singleton

const singletonObject = new Object();

singletonObject.id = "12";
singletonObject.name = "rahul";

// console.log(singletonObject)

// declaring multiple object inside single object

const multipleObject = {
  id: "123",
  fullname: {
    fName: "rahul",
    lName: "Chaudhary",
    hobbey: {
      outDoor: {
        sport : "football"
      },
      inDoor: {
        videoGame: "pubg"
      },
    },
  },
};

//Accessing 

// console.log(multipleObject.fullname.hobbey.outDoor.sport)

// Let Learn method 

// merge obeJect 

const obj1 = {
  1: "a", 2: "b"
}
const obj2 = {
  3: "c", 4: "d"
}

const obj3 = {obj1, obj2}
// console.log(obj3) // multiple obj inside single obj

const obj4 = Object.assign({}, obj1, obj2) // merge in single object using traget which is {} and source obj1, obj2
// console.log(obj4)

const obj5 = { ...obj1, ...obj2} // merge in single obejct using spread(...)
// console.log(obj5)

const databaseUser = [
  {
    id: 1,
    userName:"1",
    email:"e@gmail.com"
  },
  {
    id: 2,
    userName:"2",
    email:"e2@gmail.com"
  },
  {
    id: 3,
    userName:"3",
    email:"e3@gmail.com"
  },
]

// access databaseUservalue
// console.log(databaseUser[0].userName)


// how to access key, value and converting into array

const accessObject = {
  id: "1",
  userName:"rahul",
  email: "example@gmail.com",
  isLoggedIn: false
}

// console.log(Object.keys(accessObject)) //Returns the names of the enumerable string properties and methods of an object.

// console.log(Object.values(accessObject)) // Returns an array of values of the enumerable properties of an object

// console.log(Object.entries(accessObject))// Returns an array of key/values of the enumerable properties of an object



//check if property/value is exist or not which extracting value of object 

// console.log(accessObject.hasOwnProperty("isLoggedIn"))


// how to destructing in object 

const userDB = {
  id: "1",
  userName:"rahul",
  email: "example@gmail.com",
  isLoggedIn: false
}

const {id, userName:Fname} = userDB
console.log(id)
console.log(Fname)