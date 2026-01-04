// Write a JavaScript program to count how many times a given element appears in an array.

// 👉 Example:
// Input: [1, 2, 3, 2, 2, 4], element = 2
// // Output: 3


let arr = [1,2,3,4,5,5,5,5,6,6];
let element =5;
let count =0;

for(let i=0;i<arr.length;i++){
    if(arr[i]===element)
        count++;
}
console.log(count);