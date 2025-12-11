/**
 * Function that counts how many numbers in an array are negative.

Rules:
✔ Use for...of
✔ No .filter()
✔ Just logic

Example:
[4, -1, -7, 9, -3] → output should be 3
 */

function NegativeCount(arr){
    let count = 0;
    
    for(num of arr){
        if(num < 0){
            count ++;
        }
    }
    return count;
}

console.log(NegativeCount([4, -1, -7, -9, -3] ));