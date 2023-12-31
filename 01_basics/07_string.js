// old way to concat string 

const name = "Rahul"
let repoCount = 16

// console.log(name + repoCount + "value")

// New Way to concat string 

// console.log(`hello my name is ${name}. my repoCount is ${repoCount} `)

const gameName = new String("ClashofClan ClashRoyal")

// console.log(gameName)
// console.log(`using key value access ${gameName[5]}`);
// console.log(`accesing prototype object ${gameName.__proto__}`);

                //Prototype call

// console.log(gameName.length); // show length 11

// console.log(gameName.charAt(4)) //show char at Index key 4 = h

// console.log(gameName.toUpperCase()) // show all word in uppercase CLASHOFCLAN

// console.log(gameName.fontcolor("blue")) //change font color

// console.log(gameName.indexOf('a', 5)) // fInd index key using char and postion number // ans 9

// console.log(gameName.slice(3,9)) // slice character 
// Note: it may take -ve and +ve number to slice when take -ve number it will count from back


// console.log(gameName.replace("ofClan", " Royale")) // replace letter 


const trimExample = "       rahul     "
// console.log(trimExample)
// console.log(trimExample.trim()); // it help to remove whitespace

// console.log(gameName.includes("Clan")) // true
// console.log(gameName.includes("clan"))  // false
// note: we have we type same letter is which is captial letter is there then type captail letter or it will show false. //check or search given letter is or not

//  console.log(gameName.split(" ",1)) //help to split in array using any symbole

console.log(gameName.concat(",",trimExample)) //help to join string

/*
    Note: there is other more method which you can try to test by checking in console of browser and how to use help to mdn web doc.
*/