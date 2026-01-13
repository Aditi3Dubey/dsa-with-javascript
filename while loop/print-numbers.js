//print number 1 to 10

// let n=1;

// while(n<=10){
//   console.log(n);
//   n++;
// }

//print number from 10 down to 1 in reverse order

// let n=10;

// while(n>=1){
//   console.log(n);
//   n--;
// }

//print all even numbers between 1 and 100

// let n=1;

// while(n<=100){
//   if(n%2===0){
//     console.log(n);
//   }
//     n++;
// }

//print all odd numbers between 1 and 100

// let n=1;

// while(n<=100){
//   if(n%2!==0){
//     console.log(n);
//   }
//   n++;
// }

function MuliplicationTable(m) {
  let n = 1;

  while (n <= 10) {
    console.log(` ${m} x ${n} = ${m * n}`);
    n++;
  }
  console.log("-------------------------------------------------------------");
}

// MuliplicationTable(2);

// Calculate and print sum of first 10 natural numbers

// let sum = 0;
// let i=1;

// while(i<=10){
//   sum+=i;
//   i++;
// }
// console.log(sum);

//  Calculate and print sum of all even numbers from 1 upto 100

// let EvenSum =0;
// let i=1;

// while(i<=100){
//   if(i%2===0)
//   {
//     EvenSum+=i;
//   }
//   i++;
// }
// console.log(EvenSum);

// //  Calculate and print sum of all odd numbers from 1 upto 100

// let OddSum =0;
// let i=1;

// while(i<=100){
//   if(i%2===0)
//   {
//     OddSum+=i;
//   }
//   i++;
// }
// console.log(OddSum);

// Calculate and print the factorial of given number

// let n =12 ;
// let fact = 1;

// while(n>=1){
//   fact*=n;
//   n--;
// }
// console.log(fact);

// Find and print the product of all digit of a given number

// let number = "2034";
// let product = 1;

// for (let i = 0; i < number.length; i++) {
//   if (Number(number[i]) === 0) {
//     continue;
//   }
//   product *= Number(number[i]);
// }
// console.log(product);

let number = 12345;
let arr = number.toString().split(''); // here converting number to array of digits
let product = 1;

// By using for loop
for (let i = 0; i < arr.length; i++) {
  product*=arr[i];
  console.log(arr[i]);
}
console.log(product);

// By using reduce
let mult = arr.reduce((acc,curr)=>{
 return acc*=curr;
},1)
console.log(mult);

// let arr = [1,2,3,4];
// let mult = 1;
// for(let i=0;i<arr.length;i++){
//   mult*=arr[i];
// }
// console.log(mult);