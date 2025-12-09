/*
 Problem: Reverse a string without using .reverse()
 Goal: Strengthen string & loop logic in JavaScript
*/

// Approach 1: For loop from end to start

let str = "aditi";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
console.log(`Approach 1: ${reverseStr}`); //itida

// Approach 2: Build reversed string from front

function reversedStr(str) {
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  return reverseStr;
}
console.log(`Approach 2: ${reversedStr("hello")}`); //olleh
console.log(`Approach 2: ${reversedStr("greet")}`); //teerg
