/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

P:
Featured number:
- odd
- multiple of 7
- all digits occuring exactly once

Take a number as input and return the next "featured" number. Issue an error if num input is greater than or equal to 9876543201

E:
49 T
98 F
97 F
133 F

D: nums

A:
- Create a function featured with one param num
  
  - find the next odd multiple of 7 after the num param with nextOddMultOfSeven helper method
    - set currentNum to the return value
  - if it is a featured num, return num
  - else, iterate currentNum by 14 and check again

- create nextOddMultOfSeven helper method with one param num
  - iterate by 1 until number is odd and a multiple of 7

- create hasUniqueDigits helper method with one param num
  - convert num to string and divide into characters
  - create an empty hash
  - iterate through each element
    - if the hash includes the key element, return false
    - else, set hash key element to 1

*/

function featured(num) {
  let currentNum = nextOddMultOfSeven(num);
  if (currentNum === undefined) {
    return "There is no possible number that fulfills those requirements.";
  }
  while (!hasUniqueDigits(currentNum)){
    currentNum += 14;
  }
  return currentNum;
}

function nextOddMultOfSeven(num) {
  for (let i = num + 1; i <= 9876543201; i += 1) {
    if (i % 7 === 0 && i % 2 === 1) {
      return i;
    }
  }
  return undefined;
}

function hasUniqueDigits(num) {
  let numStringArr = String(num).split('');
  let foundNums = {};
  for (let i = 0; i < numStringArr.length; i += 1) {
    if (foundNums[numStringArr[i]]) {
      return false;
    } else {
      foundNums[numStringArr[i]] = 1;
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."