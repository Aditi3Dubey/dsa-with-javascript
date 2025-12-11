/**
 *Problem : Function to count how many elements in an array are greater than 10.

✔ Use a normal for loop
✔ Don’t use .filter()
✔ Pure logic

Example:
[5, 12, 18, 3, 7, 25] → output: 3
 */

function CountGreaterThan10(arr){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>10){
            count++;
        }
    }
    return count;
}

console.log(CountGreaterThan10([5, 12, 18, 3, 7, 25])); //3