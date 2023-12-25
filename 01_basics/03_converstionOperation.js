
        /*                     *\
            Number Converstion
        \*                     */
let score = ""

// console.log(typeof score)
// console.log(typeof(score))

const valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber)

/*
    Note:
        "33"= 33 //number
        "33aab"= NaN // value not a number but type = number
        true = 1 or false = 0 
        "" = 0
        "rahul" = NaN    
*/

        /*                     *\
            Boolean Converstion
        \*                     */

let isloggedIn = 0
const booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

/*
    Note:
        1 = true
        0 = false
        "" = false
        "rahul" = true
*/

        /*                     *\
            String Converstion
        \*                     */

let valueNB = "33ab"
const stringValue = String(valueNB)
// console.log(typeof stringValue);
// console.log(stringValue);

/*
    Note:
        true = true // string
        33 = 33 //string
        "" = empty 
        "33ab" = 33ab
*/


/*  ################# Operation #############   */


let value = 5
const negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**5); //power
console.log(2/2);
console.log(3%2);

let str1 = "rahul"
let str2 = " Chaudhary"

const str3 = str1 + str2
console.log(str3);