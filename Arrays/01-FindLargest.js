// Problem : Function to find Largest number in an array

function FindLargest(arr){
    if (arr.length === 0) return null;

    let largest = -Infinity; // for handling negative values too

    for(let i=0;i<arr.length;i++){
        if(arr[i] >largest){
            largest =arr[i];
        }
    }
    return largest;
}

console.log(FindLargest([5,6,49,7,98,8]));
console.log(FindLargest([-1,-2,-4,-5,-17]));