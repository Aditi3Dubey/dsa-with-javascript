/**
 * function to count how many elements in an array are strictly between 10 and 20.

👉 Conditions:

Use a for loop

Count numbers where 10 < num < 20

Do NOT include 10 or 20

No filter(), no shortcuts

Example:
[5, 12, 18, 3, 7, 25, 15, 20] → output = 3
(values are: 12, 18, 15)
 */

function CountValBtwn10to20(arr){
    let count= 0 ;

    for(let i=0;i<arr.length;i++){
        if(arr[i]> 10 && arr[i] < 20 ){
            count++;
        }
    }
    return count;
}

console.log(CountValBtwn10to20([5, 12, 18, 3, 7, 25, 15, 20]));