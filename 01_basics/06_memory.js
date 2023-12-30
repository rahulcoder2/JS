/* #### Stack and Heap Memory #### */

// stack(Primitive) and Heap(Non-Primitive)


// example of stack memory

let firstname = "Rahul"
let fName = firstname

fName = "littleBoy"

console.log(fName);
console.log(firstname);
console.log(fName == firstname);

// example of Heap Memory

let user1 = {
    email: "example1@gmail.com",
    userName: "User1"
}

let user2 = user1

user2.email = "example2@gmail.com"

console.log(user1);
console.log(user2);