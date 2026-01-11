// By using two object

let str1 = "listen";
let str2 = "silent";
let freq1 = {};
let freq2 = {};

if (str1.length !== str2.length) {
  console.log(false);
} else {
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  let isAnagram = true;
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      isAnagram = false;
      break;
    }
  }
  console.log(isAnagram);
}

// By using one object

let word1 = "arc";
let word2 = "car";
let freq = {};

if(word1.length!==word2.length){
  console.log(false);
}
else{
  for(let char of word1){
    freq[char] = (freq[char]||0)+1;
  }
  let isAnagram = true
  for(char of word2){
    if(freq[char]=== undefined || freq[char]===0){
     isAnagram = false;
      break;
    }
    freq[char]--
  }
  console.log(isAnagram);
}
