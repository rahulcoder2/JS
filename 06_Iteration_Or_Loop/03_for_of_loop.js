/*
    ================= FOR OF LOOP  ====================
*/

// Note : Best for handeling Array but not for Object
//[" ", " ", " "]
//[{},{}, {}]

// syntax 
// for (const iterator of object) {
    
// }

let myArrays = [1,2,3,4,5,6]

for (const myArray of myArrays) {
    // console.log(myArray)
}

//let check in string will it run 

let fullName = "Rahul Chaudhary"
for (const name of fullName) {
    // console.log(name)
}

//  basic Map for now 

const maps = new Map()

maps.set('NP', "Nepal")
maps.set('USA', "United states of America")

// console.log(map) 

// let check can we use for of loop in map 
/*
    Note: [key, value] help to seperate value and key and store in different variable
*/

for (const [key,value] of maps) {
    // console.log(key)// if you only type key in const it will come in array format
    console.log(key, ":-", value)
} 

// let check in object can we use forof

/*
    Note : forof loop can't iterable any object it only iterable map and array. for object there is other way.
*/

const games = {
    1:"spiderman",
    2:"coc",
}

for (const game of games) {
    // console.log(game) // games is not iterable
}