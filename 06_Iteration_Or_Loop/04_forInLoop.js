/*
    +++++++++++++++++++++++ For IN +++++++++++++++++++++++++
*/

/*
     for handleing object, array but it can;t use for map 
*/

// synatax

// for (const key in object) {

// }


// let see some example 

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb:"ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}


// let check in array 

const myArray = ['js', 'cpp', 'py','rb']

for (const key in myArray) {
    // console.log(`Index ${key} value ${myArray[key]}`)
}

// let check in map 

const maps = new Map()

maps.set('1', "one")
maps.set('2', "second")
maps.set('3', "third")

for (const key in maps) {
    // console.log(maps[key]) //cant print so not iterable
}