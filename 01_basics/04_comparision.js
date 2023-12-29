//  ********* Basic comparision in js ********** //

/*
    Note: answer will be come in Booleen
        console.log(2 > 5); 
        console.log(2 == 2);
        console.log(2 != 5 );
        console.log( 2 <= 5 );
        console.log( 2 >= 5 );
*/

/*
    Note: Not to use in different datatype 
    console.log("2" > 1);

    why we shouldn't use different datatype 
    because  it may not give predicted result or let say value you want to get from code. while compare any value.

    console.log(null > 0);
    console.log(null >= 0);
    console.log(null == 0);

    console.log(undefined > 0);
    console.log(undefined === 5);

    the reason is that an equality check == and comparisions >, <, >=, <= work differently.
    comparision convert null to a number, treat it as 0.
    that's why (3)null >= 0 is true while (1)null > 0 false.

*/

// ###### Strict Check Comparision in js ######## //

console.log(2 === 2);
console.log(2 !== 5);

// note: not to use console.log("3" === 3);