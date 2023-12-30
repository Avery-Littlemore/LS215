// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
// Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:
// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
P:
- Clean up user-entered phone numbers
- numbers may also contain special chars (spaces, dots, dashes, parenthese) to be ignored

- if the phone number is less than 10 digs, return string of 10 0s
- if exactly 10 digs, return 10nums as a string
- if 11 digs AND first number is 1, trim first num and return the 10 remaining nums
  - else, return 10 0s
- if > 11 or < 10, return 10 0s

Input: string
Output: string

E: below

D: strings

A:
- Create a function parsePhoneNum with one string param
  - remove all non-numerical characters from the string
  - count the length of the string
  - if greater than 11 or less than 10, return 10 0s
  - else if equal to 11 and starts with 1
    - return digits 2-11
  - else
    - return digit string

*/

function parsePhoneNum(numString) {
  numString = numString.replace(/[^0-9]/g, '');
  let digits = numString.length;
  if (digits > 11 || digits < 10) {
    return '0000000000';
  } else if (digits === 11 && numString[0] === '1') {
    return numString.slice(1);
  } else {
    return numString;
  }
}

console.log(parsePhoneNum('123-456-7890'));
console.log(parsePhoneNum('1 (123) 456-7890'));
console.log(parsePhoneNum('1-098-765-4321'));
console.log(parsePhoneNum('+1.437.997.3997'));
console.log(parsePhoneNum(',./-2,.5338./,.4290019'));
console.log(parsePhoneNum('savcxz7700'));
console.log(parsePhoneNum('--//..1234567890azxc'));