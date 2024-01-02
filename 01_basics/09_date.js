const myDate = new Date()

// console.log(myDate)

// let check method and see method

// myDate.__proto__ // use in browser console to check what method is use in Date

/* let check show method to familier to Data */

/* Note:
    this method help to format data and time in different way.
*/

//  console.log(myDate.toString()) // Returns a date and time as a string value depends on local timezone
//  console.log(myDate.toDateString()) //Returns a date as a string value of local timezone
// console.log(myDate.toTimeString()) // return time as a string value of local timezone
// console.log(myDate.toUTCString()) // Returns a date and time converted to a string using Universal Coordinated Time (UTC)


// console.log(myDate.toISOString()) //Returns a date as a string value in ISO format
// console.log(myDate.toJSON()) //return as format as toisostring


// console.log(myDate.toLocaleDateString()) // show data of local timezone
// console.log(myDate.toLocaleTimeString()) // show time of local timezone
// console.log(myDate.toLocaleString()) // show both time and date of local timezone

// check datatype to Date

// console.log(typeof myDate) // object

// Now let make custom date 

/* Note: when you give value in string it will count from 1 and default count start from 0 -11  jan to dec and 0-6 sun to sat */

// const customDate = new Date('2/11/2024')
// const mycustomDate = new Date(2024, 11, 28)
// const mycustomTime = new Date(2024,0,2,7,10)

// console.log(customDate.toDateString()); // Sun Feb 11 2024
// console.log(mycustomDate.toDateString()); // Sat Dec 28 2024
// console.log(mycustomTime.toLocaleTimeString()); // 7:10 AM/PM 


// Let learn how get date of now 

    const nowDate = Date.now()
    // console.log(nowDate) Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

// now let learn how timestamp work using Date 

/* 
    Note: help to find the value of the exact time stamp, while measuring time intervals, tracking events, or comparing different moments in time, design quiz,pole how give fastest time for winner pick.
    
    Note: comparing different moment always using in milisecond but to convert into sec you can use /1000
*/

// let create time stamp then 

    const timestamp = new Date()
    // console.log(timestamp.getTime()) // this will give us date/month/day/week/hrs/sec in milisec from unix time( 1 January 1970 UTC)

    const timeStampUsingNow = Date.now()
    // console.log(timeStampUsingNow);
    // console.log(timeStampUsingNow)

    const timeStampUsingValueof = Date().valueOf()
    // console.log(timeStampUsingNow)

// now Let convert sec 
    // console.log(Math.floor(timeStampUsingNow/1000))


    
/* Note:
        this method help to get data and time in different way.
*/


// console.log(myDate.getFullYear()) //give  year

// console.log(myDate.getDate()) // Gets the day-of-the-month

// console.log(myDate.getDay()) // get day to week start from Sunday - Saturday : 0 - 6 

// console.log(myDate.getHours()) // Gets the hours in a date

// console.log(myDate.getMilliseconds()) //Gets the milliseconds of a Date

/*
    there is other get method use you can try out some of yourself
*/

// Now let make custom data and time using toLocaleString()

    /*
        Note: Important 
    */

const customLocaleDate = new Date()
    customLocaleDate.toLocaleString("default", {
        formatMatcher:"best fit",
        weekday: 'narrow'
    })
    // console.log(customLocaleDate)