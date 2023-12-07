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
Input: string
Output: string
Questions:
- Will it always be a string of chars?
- Do I ignore any special characters despite their location, or are some giving me a means for suspicion AKA potential bad numbers?
- What if there are letters?

Rules:
- Explicit:
  - If the contains is fewer than 10 digits, return 10 0s
  - If the string contains exactly 10 digits, return the digits only
  - If the string contains 11 digits and the first is a 1, trim the 1 and return the digits only
  - If the string contains 11 digits and the first is NOT a 1, or if there are more than 11 digits, return 10 0s
- Implicit:
  - Digit is any number between 0-9


Examples:
123-456-7890
1 (123) 456-7890
1-098-765-4321
+1.437.997.3997
,./-2,.5338./,.4290019
savcxz7700
--//..1234567890azxc

D: 
input as a string
output as a string

A: 
- Create a method called parsePhoneNum with one parameter numStr
  - replace any non-numeric or whitespacecharacters with ''
  - if string length > 11 or < 10, return 10 0s
  - else if string length === 11
    - check to see if the first character is 1
      - if so, slice the remainder of the string and return it
      - if not, return 10 0s
  - else (AKA, if string length is 10 exactly)
    - return string
*/

function parsePhoneNum(str) {
  str = str.replace(/[^0-9]/g, '')
  let length = str.length
  if (length === 11 && str[0] === '1') {
    return str.slice(1)
  } else if (length === 10) {
    return str
  } else {
    return '0000000000'
  }
}

console.log(parsePhoneNum('123-456-7890'));
console.log(parsePhoneNum('1 (123) 456-7890'));
console.log(parsePhoneNum('1-098-765-4321'));
console.log(parsePhoneNum('+1.437.997.3997'));
console.log(parsePhoneNum(',./-2,.5338./,.4290019'));
console.log(parsePhoneNum('savcxz7700'));
console.log(parsePhoneNum('--//..1234567890azxc'));