/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

P:
Input: string
Output: object with % of lowercase chars; % of uppercase chars; % of neither 

- String as input
- always has at least one char

E: below
D: break into array of chars and iterate
A:
- create function letterPercentages with one string param
  - divide string into array of chars
  - create return obj with three keys (lowercase, uppercase, neither) and values (0, 0, 0)
  - iterate through each char
    - if char is ____, add 1 to that key's value
  - divide each obj value by the number of total chars
  - return obj

*/

// function letterPercentages(str) {
//   let arr = str.split('');
//   let returnObj = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0,
//   }

//   arr.forEach(char => {
//     if (char.match(/[a-z]/)) {
//       returnObj.lowercase += 1;
//     } else if (char.match(/[A-Z]/)) {
//       returnObj.uppercase += 1;
//     } else {
//       returnObj.neither += 1;
//     }
//   });
//   returnObj.lowercase = returnObj.lowercase * 100 / str.length;
//   returnObj.uppercase = returnObj.uppercase * 100 / str.length;
//   returnObj.neither = returnObj.neither * 100 / str.length;
//   return returnObj;
// }

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }