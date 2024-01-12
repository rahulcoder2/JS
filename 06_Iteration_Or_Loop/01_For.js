/*
        ++++++++++++++++  FOR +++++++++++++++++++++++++
*/

//synatax 

// for (let index = 0; index < (how much time you want to loop); index++) {
//     const element = array[index];
    
// }

// let check from example:

for (let i = 0; i < 5; i++) { 
    const element = i
    // console.log(element)
}

// console.log(element) // cant access outside of scope

//  now let see if condition inside for loop


for (let i = 1; i <= 5 ; i++) {
    const var1= i
    if(var1 == 1){
        // console.log(`${i} == 1`)
    }else{
        // console.log(`${i} > 1`);
    }
}

// now let see for loop inside for loop

for (let i = 1; i <= 5; i++) {
    // console.log(`outer value of i= ${i}`)
    for (let j = 1; j <=10 ; j++) {
        // console.log(`inner value of j= ${j} in Outer seal of i = ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

// array inside for loop

const myArray = ["tom", "jerry", "mike"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}
/*
    Note: this is not best way to use loop in array there is other loop which is use for array we will learn later in topic.
*/

//   keyword in loop (break and continue)

// break
for(let i = 1; i< 10; i++){
    if(i == 5){
        // console.log(`value of 5 found`)
        break
    }
    // console.log(`value of ${i}`)
}

// continue

for(let i = 1; i< 10; i++){
    if(i == 2){
        console.log(`value of ${i} error but continue`)
        continue
    }
    console.log(`value of ${i}`)
}
