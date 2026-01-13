// Problem: Find the sum of digits of a number

let num = 472;
num = Math.abs(num); // Handle negative numbers

/* ------------------------------
   Approach 1: String Conversion
-------------------------------- */

let numStr = num.toString();
let sumUsingString = 0;
let i = 0;

while (i < numStr.length) {
  sumUsingString += Number(numStr[i]);
  i++;
}

console.log("Sum using string approach:", sumUsingString);

/* ------------------------------
   Approach 2: Mathematical Method
-------------------------------- */

let sumUsingMath = 0;
let temp = num; // Preserve original value

while (temp > 0) {
  sumUsingMath += temp % 10;
  temp = Math.floor(temp / 10);
}

console.log("Sum using math approach:", sumUsingMath);
