/*
    Immediately Invoked Function Expressions
*/

/*
there is problem due to pollution of global scope. many time, we have to throw it.So, to remove the pollution of the variable of global scope and whatever declaration is there. SO we used iife
    Note: It executed immediately 
*/

// syntax ()()

// let declare one iife

(function iife() {
  console.log("namely iife");
})();

(() => {
  console.log("nameless iife");
})();

// Parameter Passing in iife

((UserName) => {
  console.log("nameless iife");
  console.log(`${UserName} `);
})("Rahul")(
  // let learn how to write two iife togetheer

  //this will give us problem
  // (()=>{
  //     console.log("nameless iife")
  // })()

  // (()=>{
  //     console.log("nameless iife")
  // })()

  // IT DON'T KNOW WHEN TO END SO WE HAVE TO GIVE ; END To CALL or FUNCTION let write same code but this time will give ;

() => {
    console.log("nameless iife");
  }
)();

(() => {
  console.log("nameless iife");
})();

//now check ans will be correct
