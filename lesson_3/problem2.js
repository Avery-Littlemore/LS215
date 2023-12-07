// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, 
// such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial 
// number to generate the full number. This number must pass the following test:
  // Counting from the rightmost digit and moving left, double the value of every second digit
  // For any digit that thus become 10 or more, subtract 9 from the result
    // 1111 becomes 2121
    // 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
  // Add all these digits together
    // 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
    // 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the 
// number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, 
// it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, 
// for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

/*
Questions:
- what is a check digit?
- delete all non-numeric chars?

P:
- Take a number (string) as input
- Create a checksum by: starting from the rightmost digit, iterate through the digits and double every other digit.
  - If the number when doubled is greater than 10, subtract that SUM by 9 (i.e., 6 * 2 = 12 -> 12 - 9 = 3)
- Add each of the digits in the new number together to find the checksum (i.e., 2121 => 2 + 1 + 2 + 1 = 6)
- If the checksum ends in 0 (confirmed by checksum % 10 === 0)
  - The number will be perceived as valid
- If not, the number is invalid

Input: String
Output: Boolean T/F

E:
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6 => false
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20 => true
2323 2005 7766 3554 => true

D: 
Input: string of numbers, replace non-numeric values with '', convert to array of individual nums, convert each numStr to a number
Output: boolean

A: 
- Create a function called isValidLuhn with one string parameter
  - Delete all non-numeric characters in the string
  - Create an array that includes each numeric character from the Num String
  - Convert each character in the array to a number
  - Determine the second to last index using array.length - 2
  - Iterate *by twos* through the array, starting from the second to last index in a for loop
    - Multiply the current element by two
    - If the return value >= 10
      - subtract 9 and replace the current element value with the new value
    - If the return value < 10
      - Replace the current element value with the new value
  - Sum the array with reduce
  - Return array sum % 10 === 0 (boolean true if the equation evaluates to true, else returns false)

*/

function isValidLuhn(numString) {
  numString = numString.replace(/[^0-9]/g, '');
  let numArr = numString.split('').map(Number);
  let startIndex = numArr.length - 2;
  for (let i = startIndex; i >= 0; i -= 2) {
    let newNum = numArr[i] * 2;
    if (newNum >= 10) {
      numArr[i] = newNum - 9;
    } else {
      numArr[i] = newNum;
    }
  }
  return numArr.reduce((total, accum) => total + accum, 0) % 10 === 0;
}

console.log(isValidLuhn('1111')) // false
console.log(isValidLuhn('8763')) // true
console.log(isValidLuhn('2323 2005 7766 3554')) // true 
console.log(isValidLuhn('8zxcvxzvfd.,/!76  djjdskn  ++_3')) // true