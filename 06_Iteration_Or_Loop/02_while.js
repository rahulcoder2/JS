/*
    =============== While Loop ====================
*/

// let learn how while loop work

// synatax
// let increment = n
// while (condition) {

// }

// let i = 1;
// while (i <= 10) {
//   // console.log(`odd number ${i}`)
//   i = i + 2;
// }

// now let see if condition inside while loop

let counter = 0;
let number = 0;
while (counter <= 5) {
  counter++;
  number++;
  if (number == 3) {
    console.log(
      // `Hello World I am number ${i}, and middle number between 1 to 5`
    );
  } else {
    // console.log(`${number}`);
  }
}

// let check for loop inside while loop

let increment = 1
while (increment <= 5) {
  console.log(`Multiple of ${increment}`)
  for (let i = 1; i <=10; i++) {
    console.log(`${increment} * ${i} = ${increment*i}`)
  }
  increment++
}

//  let check array inside while loop 

/*
  Note : not best way to access array in loop 
*/


let myArray = ['Tome', "Caty", "jerry", "puppy"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`index ${arr} value ${myArray[arr]}`)
    arr++
}

// break and continue

let iBreak = 0
while(iBreak <= 5){
    if (iBreak ==3) {
        // console.log(`index ${iBreak} FOUND. Let take break`);
        break;
    }else{
        // console.log(`index ${iBreak} NOT FOUND `);
    }
    iBreak++
}

let iContinue = 0
while (iContinue <= 5) {
    if (iContinue == 3) {
        // console.log(`index ${iContinue} have error. But let continue`);
    } else {
        // console.log(`index ${iContinue}`);
    }
    iContinue++
}


/*
    ++++++++++++++++++ Do While Loop +++++++++++++++++++++++++++++++
*/

// synatax
// let increment = n 
// do {
    
// } while (condition);

// let see example 

let i = 0
do {
    // console.log(i)
    i++
} while (i<= 5);

// let see if we add icount more than condition what will happen

/*
    Note: It will print 6 and come out, do while do first and later check condition
*/ 

let icount = 6
do {
    // console.log(icount)
    icount++
} while (icount<=5);


// let see if inside do While loop 

let doIf = 0
do {
    if(doIf == 3){
        // console.log(`index ${doIf} found`);
    }
    doIf++
} while (doIf <= 5);

// let see for loop inside dowhile loop

let doFor= 1
do {
    // console.log(`multiply of ${doFor}`)
    for (let i = 1; i <= 10; i++) {
        // console.log(`${doFor} * ${i} = ${doFor * i}`)
        
    }
    doFor++
} while (doFor <= 5);

// let see array inside dowhile loop

let doMyArray = ['Tome', "Caty", "jerry", "puppy"]
let doArr = 0
do {
    // console.log(`Index ${doArr} value ${doMyArray[doArr]}`)
    doArr++
} while (doArr < doMyArray.length);

// break and continue

// break

let doBreak = 0
do {
    if (doBreak == 3) {
        // console.log(`index ${doBreak} found, let take break`);
        break;
    } else {
        // console.log(`index ${doBreak}`)
    }
    doBreak++
} while (doBreak <= 5);

// continue

let doContinue = 0
do {
    doContinue++
    if (doContinue == 3) {
        // console.log(`index ${doContinue} have error but forget this time and continue`);
        continue;
    } else {
        // console.log(`index ${doContinue}`)
    }
} while (doContinue <= 5);