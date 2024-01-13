/*
    ++++++++++++++++ ForEach loop
*/

/*
    Note: 
            1. ForEach Loop is higher order function
            2. using in Array, Object, Map,string
*/

// syntax 

// array.forEach(element => {
    // {call back function }
// });

// let see example

const languages = ['js', 'cpp', 'py', 'java' ]

// using arrow function
languages.forEach((language)=>{
    // console.log(language)
})

// using regular function
languages.forEach(function (language){
    // console.log(language)
})

// using single line function 

// languages.forEach( language => console.log(language))

// using function reference 

function printLanguage(item){
    // console.log(item)
}

// languages.forEach(printLanguage)

// let see what thing can we access from callback parmeter

languages.forEach((item,index, arr)=>{
    // console.log(item, index, arr)
})

// let how to iteration in array with object .

const codingLanuages = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

codingLanuages.forEach((item)=>{
    // console.log(`Language fileName `, item.languageFileName)
})