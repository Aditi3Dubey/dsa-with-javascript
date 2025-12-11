/**
 * Problem: Logic to count how many even numbers are in an array — but using for...of instead of a normal for loop.
 * Example input:
   [2, 5, 8, 11, 14, 17] → output → 3
 */

   function CountEven(arr){
    let count = 0;

    for(num of arr){
        if(num%2 ===0){
            count++;
        }
    }
    return count;
   }

   console.log(CountEven([2, 5, 8, 11, 14, 17]));