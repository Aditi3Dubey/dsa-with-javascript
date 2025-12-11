/**
 * Problem: Count how many values appear more than once in an array.
 *
 * Approach: Use nested loops (no Set, no filter, no map).
 *           For each element, check if it appears again later in the array.
 *           Count each duplicate value only once.
 */

function countDuplicates(arr) {
  let duplicateCount = 0;
  let counted = []; // store values that are already counted as duplicates

  // Outer loop → pick each element one by one
  for (let i = 0; i < arr.length; i++) {
    
    if (counted.includes(arr[i])) continue;  // Skip elements already counted as duplicates

    // Inner loop → compare current element with the remaining elements
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicateCount++;      
        counted.push(arr[i]);  // Mark this value as already counted
        break;                 // Stop inner loop, no need to check further
      }
    }
  }

  return duplicateCount;
}

console.log(countDuplicates([1, 2, 3, 2, 4, 1, 5]));  // 2
console.log(countDuplicates([1, 1, 1, 1]));           // 1
console.log(countDuplicates([5, 6, 7]));              // 0
