/* Problem : Logic to count how many odd numbers are present in an array (without using filter).

Example:
Input → [1, 4, 7, 9, 12]
Output → 3

*/

function CountOdd(arr){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    return count;
}

console.log(CountOdd([1, 4, 7, 9, 12]));