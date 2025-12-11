// Problem : Without using Math.max or any built-in methods,
//  Write logic to find the smallest number in an array.

function FindSmallest(arr){
    if(arr.length === 0) return null  // handle empty array
    let smallest = Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(FindSmallest([4, -2, 7, -9, 3]));