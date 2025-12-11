/*
  Problem: Count vowels in a string 
*/


/* ---------------- Approach 1 (for loop) ---------------- */


let str = "hEllo";
str = str.toLowerCase();
let count = 0;
let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) count++;
}
console.log(count);

/* ---------------- Approach 2 (for..of) ---------------- */

let name = "Aditi".toLowerCase();
let countVowel = 0;
let vowel = "aeiou";

for (let char of name) {
  if (vowel.includes(char)) countVowel++;
}
console.log(countVowel);

