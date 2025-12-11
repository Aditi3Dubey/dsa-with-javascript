// Problem : Function to count how many elements in an array are odd and greater than 20.

function CountValOddGreater20(arr){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !==0 && arr[i] >20) count++;
    }
    return count;
}

console.log(CountValOddGreater20([5, 21, 22, 37, 40, 45, 12]));
