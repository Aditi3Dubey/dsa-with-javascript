/*
  Problem: Check if a string is a palindrome
  - Without using reverse()
  - With two approaches
*/

/* ---------------- Approach 1: Build reversed string ---------------- */

function checkPalindrome(str) {
  // Convert the input string to lowercase
  str = str.toLowerCase();
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  if (str === reversedStr) return true;
  else {
    return false;
  }
}

console.log(checkPalindrome("madam")); //true
console.log(checkPalindrome("hello")); //false


/* ---------------- Approach 2: Two-pointer technique ---------------- */
let str = "A man a plan: a canal: Panama";

//Normalize string
str=str.toLowerCase();
str = str.replace(/[^a-z0-9]/g, ""); // remove spaces,special characters,comma, etc

let left = 0;
let right = str.length - 1;
let isPalindrome = true;

while (left < right) {
  if (str[left] !== str[right]) {
    isPalindrome = false;
    break;
  }

  left++;
  right--;
}

console.log(isPalindrome); // true