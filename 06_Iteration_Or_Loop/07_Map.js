/*
        +++++++++++++++++++++++ Map ++++++++++++++++++++++++++++
*/

/*
     Note : This is advance version of forEach Loop which return value but have to write condition 
*/

// let see example

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// does it return value let see

let newNums = nums.map((item) => item);

// console.log(newNums)

// let see how chaining work in js

newNums = nums
  .map((item) => item + 5)
  .map((preItem) => preItem * 10)
  .filter((item) => item >= 100);

console.log(newNums);



