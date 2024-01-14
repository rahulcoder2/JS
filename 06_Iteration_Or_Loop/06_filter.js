// let see  forEach return value or not 

const coding = ["js", "cpp", "java"]

const returnValue = coding.forEach((item)=>{
    return item
})

// console.log(returnValue) // undefined 

// it show undefined value will dont return value.But if we want to return value of any array or object  there will come concept of filter will will return value  with condition fulfilled let see example and syntax

/*
            +++++++++++++++++++++ Filter ++++++++++++++++++++++++++
*/

const myNums =[1,2,3,4,5]

/*
    Note: 
    filter Returns the elements of an array that meet the condition specified in a callback function.
*/

const newNums= myNums.filter((item)=>(
    item <= 3
))

// console.log(newNums)


// but if you want to return value from forEach you can let see example

const value = [1,2,3,4,5]

const valueReturn = []

value.forEach((item)=> {
    if (item <= 3 ) {
        valueReturn.push(item)
    }
}) 

// console.log(valueReturn)


// let see how to use filter data from database let assume given books in database data.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter((book)=>(
    book.genre == "History" && book.edition >=1990
))

userBooks = books.filter((book) =>{
    return book.publish <= 2000
})

console.log(userBooks)