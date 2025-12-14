/*
Pattern: Left-Aligned Star Triangle

* 
* * 
* * * 
* * * * 
* * * * * 

Rows: 5
*/

// Outer loop → controls each row
for (let i = 1; i <= 5; i++) {
  let row = "";

  // Inner loop  → print stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  
  // Move to the next line after printing each row
  console.log(row);
}
