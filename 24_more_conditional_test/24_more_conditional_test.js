"use strict";
// equality test 
console.log("equality test with string: ", "Apple" === "Apple");
// inequality test 
console.log("Inequality test with string: ", "Apple" != "Orange");
// test using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality 
console.log("equality test with number: ", 26 === 26);
// Numerical tests involving inequality
console.log("inequality test with number: ", 26 != 35);
// greater than 
console.log("Greater than test:", 10 > 5);
// less than
console.log("less than test:", 5 < 10);
// greater than or equal to
console.log("greater than or equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// test using "and" operator
console.log("and operator test: ", 5 === 5 && 10 > 5);
// test using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// test whether an item is in a array
const fruits = ['apple', 'banana', 'mango'];
console.log('test "apple" in the array: ', fruits.includes("apple"));
// Test whether an item is not in a array
console.log('testing "orange" is not in array: ', !fruits.includes('orange'));
