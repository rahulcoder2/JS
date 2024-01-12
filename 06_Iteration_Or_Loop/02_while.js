/*
    =============== While Loop ====================
*/

// let learn how while loop work

// synatax
// let increment = n
// while (condition) {

// }

let i = 1;
while (i <= 10) {
  // console.log(`odd number ${i}`)
  i = i + 2;
}

// now let see if condition inside while loop

let counter = 0;
let number = 0;
while (counter <= 5) {
  counter++;
  number++;
  if (number == 3) {
    console.log(
      `Hello World I am number ${i}, and middle number between 1 to 5`
    );
  } else {
    console.log(`${number}`);
  }
}
