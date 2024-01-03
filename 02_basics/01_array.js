            /* +++++++++ ARRAY +++++++++ */

//  let learn how to declare Array 

let myArray = ['Balance', 'call', 'event', 'focus']
const secondArr = [ 0,1 ,2 ,4,"hello"]
const thirdArr = new Array("hello", 3,2,5,)

// Accessing Array

// console.log(myArray)
// console.log(secondArr[4])
// console.log(thirdArr)

// array method

myArray.push(5) // Appends new elements to the end of an array
// console.log(myArray);

myArray.pop() // Removes the last element from an array 
// console.log(myArray);

myArray.unshift("easy") //Elements to insert at the start of the array
// console.log(myArray);

myArray.shift() //Removes the first element from an array
// console.log(myArray);

//Determines whether an array includes a certain element, returning true or false
// console.log(myArray.includes(3))

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArray.indexOf(6))
// console.log(myArray.indexOf(9))


// convert array into string

//Adds all the elements of an array into a string, separated by the specified separator string
const JoinStringArray = myArray.join()
// console.log(JoinStringArray);
// console.log(typeof JoinStringArray);

const localeStringArray = myArray.toLocaleString()
// console.log(localeStringArray);
// console.log(typeof localeStringArray);

const stringArray = myArray.toString()
// console.log(stringArray);
// console.log(typeof stringArray);


// Slice and Splice in Array
/*
    note: uncommon all at once to understand how slice and splice work in array.
    breif summary:study of which operation/method manipulate orginal array and which one doesn't.
*/ 

// console.log("Orginal value of Myarray is ", myArray)

const sliceArray = myArray.slice(1,3)//Returns a copy of a section of an array
// console.log("SliceArray value is ",sliceArray)

// console.log("Orginal value after using sliceArray value of Myarray is ", myArray)

const spliceArray = myArray.splice(1,2) //Removes elements from an array if necessary, inserts new elements in their place, returning the deleted elements
// console.log("SpliceArray value is ",spliceArray)

// console.log("Orginal value after using spliceArray value of Myarray is ", myArray)


// now let learn how to merge in Single Array and multiply array and other.

const domisticAnimal = ["horse", "cat", "dog", "cow"]
const wildAnimal = ["tiger", "lion", "bear", "monkey"]
const animal = []

// Note: not recomended for merge and accessing but this is also method

animal.push(domisticAnimal, wildAnimal)
// console.log(animal)

// console.log(animal[1][1])
 
animal.concat(domisticAnimal, wildAnimal)
// console.log(animal)

const allAnimal = domisticAnimal.concat(wildAnimal)
// console.log(allAnimal)


// Note : recomended to merge in single array, ... mean spread

const new_allAnimal = [...domisticAnimal, ...wildAnimal]
// console.log(new_allAnimal)

const infinityArray = ["tom", "jerry", 5, 8, ["hello", "world",["top", "bottom", "right", "left"]]]

const usableSingleArray = infinityArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// console.log(usableSingleArray)

// Now let learn to convert into array from different datatype

// String to Array 
const fName = 'rahul'

// console.log(Array.isArray(fName)) //check this is array or not 
// console.log(Array.from(fName)) // convert to an array

// object to Array
const objectvalue = {
    name :"Tom",
    age: 35,
}
// console.log(Array.of(objectvalue)) //for now this much this is interesting topic

//number to Array

const score1 = 1
const score2 = 2
const score3 = 3

// console.log(Array.of(score1,score2,score3))
