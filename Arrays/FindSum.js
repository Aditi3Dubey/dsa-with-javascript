// Problem: Write a Program to find a sum of an array?

function FindSum(arr){
    let sum =0;

    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}

console.log(FindSum([1,2,3]));
console.log(FindSum([1,2,3,4,5]));