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
P:
- take a number string as input
- remove any non-numeric characters
- starting from the right, every OTHER digit should be doubled
  - if doubling the digit results in a number greater than 10, subtract 9
- once every other number has been revised, sum all digits
- if the sum ends in 0, the number is valid

Input: string
Output: boolean

E: below

D: string -> array of string characters -> boolean

A:
- create function isValidLuhn with one string param
  - remove any non-numeric characters
  - divide the string into an array of chars
  - iterate by twos, starting from the second to last character (index arr.length - 2) and decrementing
    - convert character to number and multiply by 2
    - if num is greater than or equal to 10
      - num = num - 9
    - convert num back to string and re-insert in the array
  - use the reduce method to find the sum of the numString array
  - return boolean result of sum % 10 === 0
*/

function isValidLuhn(string) {
  string = string.replace(/[^0-9]/g, '');
  let chars = string.split('');
  let num;
  for (let i = chars.length - 2; i >= 0; i -= 2) {
    num = Number(chars[i]) * 2;
    if (num >= 10) {
      num -= 9;
    }
    chars[i] = String(num);
  }
  let sum = chars.reduce((total, accum) => Number(total) + Number(accum), 0);
  return sum % 10 === 0;
}

console.log(isValidLuhn('1111')) // false
console.log(isValidLuhn('8763')) // true
console.log(isValidLuhn('2323 2005 7766 3554')) // true 
console.log(isValidLuhn('8zxcvxzvfd.,/!76  djjdskn  ++_3')) // true