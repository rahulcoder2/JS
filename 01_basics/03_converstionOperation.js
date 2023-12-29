
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
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5); //power
// console.log(2/2);
// console.log(3%2);

let str1 = "rahul"
let str2 = " Chaudhary"

// const str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(2 + "1"); // 21
// console.log(2 + 3 + "2"); //ans 52
// console.log("2" + 2 + 3); //ans 223

/*
    it is because Rule of Primitive type which is in is link you can check in full detail how it work :
    https://tc39.es/ecma262/#sec-abstract-operations
*/

/*
    Note:
        don't use this type to code 
        console.log(3+2*5%3);
        console.log(+true);
        console.log(+"");
        
        let num1, num2, num3
        
        num1 = num2 = num3 = 5 + 3
*/

// Let make small gamecounter which start at 100 and increment it 

let gamecounter = 100
gamecounter++;
console.log(gamecounter);

