/*
Pattern: Right-Aligned Star Triangle

      *
    * *
  * * *
* * * *

Rows: 4
*/

// Total number of rows
const rows = 4;

// Outer loop → controls each row
for (let i = 1; i <= rows; i++) {
  let row = "";

  // Inner loop 1 → print spaces before stars
  for (let s = 1; s <= rows - i; s++) {
    row += "  "; // 2 spaces for alignment
  }

  // Inner loop 2 → print stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  // Move to the next line after printing each row
  console.log(row);
}
