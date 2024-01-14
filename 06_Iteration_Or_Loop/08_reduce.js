/*
    +++++++++++++++ Reducer ++++++++++++++++
*/

// it executes Usersuplied


const myArray = [1,2,3,4,5,6,7,8,9]

let totalValue = myArray.reduce(function (acc, currValue){
    // console.log(`pervious value = ${acc} current value = ${currValue}`)
    return acc + currValue
},0)

// totalValue = myArray.reduce((prevVal, curValue)=> prevVal + curValue,0)
// console.log(totalValue)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let TotalPriceToPay = shoppingCart.reduce((item, curentValue) => item + curentValue.price, 0)

console.log(TotalPriceToPay);