/*
=====================================
While Loop Practice Problems
=====================================
*/

/* ----------------------------------
   1. Print numbers from 1 to 10
----------------------------------- */

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

/* ----------------------------------
   2. Print numbers from 10 to 1
----------------------------------- */

let j = 10;

while (j >= 1) {
  console.log(j);
  j--;
}

/* ----------------------------------
   3. Print all even numbers (1–100)
----------------------------------- */

let k = 1;

while (k <= 100) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

/* ----------------------------------
   4. Print all odd numbers (1–100)
----------------------------------- */

let l = 1;

while (l <= 100) {
  if (l % 2 !== 0) {
    console.log(l);
  }
  l++;
}

/* ----------------------------------
   5. Print multiplication table
----------------------------------- */

function printMultiplicationTable(number) {
  let n = 1;

  while (n <= 10) {
    console.log(`${number} x ${n} = ${number * n}`);
    n++;
  }

  console.log("----------------------------------");
}

// printMultiplicationTable(2);

/* ----------------------------------
   6. Sum of first 10 natural numbers
----------------------------------- */

let sum = 0;
let m = 1;

while (m <= 10) {
  sum += m;
  m++;
}

console.log("Sum of first 10 natural numbers:", sum);

/* ----------------------------------
   7. Sum of even numbers (1–100)
----------------------------------- */

let evenSum = 0;
let p = 1;

while (p <= 100) {
  if (p % 2 === 0) {
    evenSum += p;
  }
  p++;
}

console.log("Sum of even numbers:", evenSum);

/* ----------------------------------
   8. Sum of odd numbers (1–100)
----------------------------------- */

let oddSum = 0;
let q = 1;

while (q <= 100) {
  if (q % 2 !== 0) {
    oddSum += q;
  }
  q++;
}

console.log("Sum of odd numbers:", oddSum);

/* ----------------------------------
   9. Factorial of a number
----------------------------------- */

let num = 12;
let factorial = 1;

while (num >= 1) {
  factorial *= num;
  num--;
}

console.log("Factorial:", factorial);

/* ----------------------------------
   10. Product of digits of a number
----------------------------------- */

let number = 12345;
let digits = number.toString().split("");
let product = 1;

/* Using for loop */
for (let i = 0; i < digits.length; i++) {
  product *= Number(digits[i]);
}

console.log("Product using loop:", product);

/* Using reduce */
let reducedProduct = digits.reduce((acc, curr) => acc * Number(curr), 1);
console.log("Product using reduce:", reducedProduct);
