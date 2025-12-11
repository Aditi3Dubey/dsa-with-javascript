// Problem : Function to find second largest  in an array

function FindSecondLargest(arr){
    if (arr.length < 2) return null;
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest =largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(FindSecondLargest([5,6,49,7,98,8]));
console.log(FindSecondLargest([-1,-2,-4,-5,-17]));
