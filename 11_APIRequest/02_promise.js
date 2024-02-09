//  promise is task which is make queues in for later on.

// let learn how to declar promise

// promise take callback inside Promise which might be do an async task
// DB calls, cryptography, task

/* Note:
     promise only take one time resolve()/reject() if we add two or more resolve()/reject it will  ignored
*/

// consumption

// 1st way promise

// const promiseone = new Promise((resolve, reject)=>{
//     setTimeout(function () {
//         console.log("async task is complete");
//         // resolve();
//     },1000)
// })

// how to consumption promise

/*
    let access consumption resolve help to consumed then function data 
    for that we have to add resolve() in promiseone valariable.
    now that resolve task alway come after completeing async task.
 */

//  promiseone.then(function () {
//     console.log('promise consumed');
//  })

//  2nd way of promise

// new Promise((resolve, reject) =>{
//     console.log("async task 2");
//     resolve();
// }).then(
//     function () {
//         console.log("async resolve 2");
//     }
// )

// 3th way of promise

//how to pass resolve data to then() from database

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({name: "Rahul", userName: "Rahulcoder", email: "example@gmail.com"})
//     }, 1000);
// })

// promiseThree.then((Userdata)=>{
//     console.log(Userdata);
// })

// 4th way promise
// how error is handled in promise

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ name: "Rahul", email: "example.com" });
    } else {
      reject("Promise is rejected");
    }
  }, 1000);
});

// how chaining work in promise?
/*
  Note:
    then() will pass return  promise to us.callback functions for the success and failure cases of the Promise.
    then()  returns a Promise, we can chain then() calling 
*/

// promiseFour
// .then((user)=>{
//     console.log("first chain resolve", user)
//     const userName = user.name;
//     return userName
// })
// .then((username)=>{
//     console.log("second chain resolve ",username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("callback that is invoked when the promise is resolve or reject ")
// })

// 5th way of promise

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "Tome", email: "example.com" });
    } else {
      reject("Tome is rejected");
    }
  }, 1000);
});

/*
    Note:
        let see how we can you async function to consumed promise .
*/

// Error code case

/*
    Note: if we set error false it will run but if true it will not run.
*/

// so let us suggest we are connect to network req inthis example there might be come error

// async function errorconsumedpromiseFive() {
// // const res = await promisefive(); // cant consumed this way because it is object
//    const res = await promisefive; // this is evently object which will be consumed
//     console.log(res);
// }
// errorconsumedpromiseFive();

// Correct code case

async function consumedpromisefive() {
  try {
    const res = await promisefive;
    console.log(res);
  } catch (error) {
    console.log("E:", error);
  }
}
// consumedpromisefive();

// Now let see real case how this work ?

// error case

async function erroronegetGithubrahulcoder() {
  const res = await fetch("https://api.github.com/users/rahulcoder2");
  const data = res.json();
  console(data);
}
// erroronegetGithubrahulcoder()

/*
    Note: 
        this code will run if you try uncomment console.log(res) and comment const data = res.json();
        console(data); this is because it take time to get data from server so check correct case to see how correct data is fetch in webpage
*/

async function errortwogetGithubrahulcoder() {
  try {
    const res = await fetch("https://api.github.com/users/rahulcoder2");
    console.log(res);
    // const data = res.json();
    // console.log(data);
  } catch (error) {
    console.log("e:", error);
  }
}

// errortwogetGithubrahulcoder()

// correct way case

async function getGithubrahulcoder2() {
  try {
    const res = await fetch("https://api.github.com/users/rahulcoder2");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("e:", error);
  }
}

getGithubrahulcoder2()


// now let see how we can write this code in .then().catch()

// fetch("https://api.github.com/users/rahulcoder2")
// .then((res)=>{
//     return res.json()
    
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log("E:",error)
// })