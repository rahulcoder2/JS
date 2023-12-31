                            /* ###### Number ###### */

// console.log(Number)

const score = 555.5555

// console.log(score);

const balance = new Number(50000)

// console.log(balance);

// let call Number Method

// console.log(balance.toExponential(1))

// console.log(balance.toFixed(2)) //give 50000.00

 const nepaliNumberFormat = 1500000 
//  console.log(nepaliNumberFormat.toLocaleString()) // us format : 15,000,000
// console.log(nepaliNumberFormat.toLocaleString('en-IN')) //npr/inr format

// console.log(score.toPrecision(4));


const check= balance.toString() // Convert into string and can access string method
// console.log(check.length) // 5
// console.log(check); // balance value 
// console.log(typeof check); // ans : string

// console.log(balance.valueOf()) // show value of give number 



            // ******************** Maths ******************** \\


// console.log(Math);

// let do math method

// console.log(Math.abs(-5)) // change -ve integer into +ve integer
// console.log(Math.round(555.55)) // give round of value 556
// console.log(Math.floor(55.5)) // give floor value 55
// console.log(Math.ceil(55.9)); // give ceil value 56
// console.log(Math.sqrt(4)) //  give square root 
// console.log(Math.pow(2,4)) //  give power value 
// console.log(Math.max(1,2,3,8,55)) // give max value
// console.log(Math.min(88,5,1)) // give min value 


// Note : Important method  random

const random = Math.random() 
// console.log(random); //give randon number 0 to 0.9

const wholeNumber = random * 10 
// console.log(wholeNumber); // give whole number 0 to 9.999

const naturalNumber = wholeNumber + 1 
// console.log(naturalNumber) // give natural number 1 to 9.999

const floorNumber = Math.floor(wholeNumber) 
// console.log(floorNumber) // give floor number 1 to 9

//now  for eg : let take max and min number to show using random which roll dice 1 to 6 .

const minNumber = 1
const maxNumber = 6

const dice =Math.floor(((Math.random() * (maxNumber- minNumber)) + 1) + minNumber)
console.log(dice)