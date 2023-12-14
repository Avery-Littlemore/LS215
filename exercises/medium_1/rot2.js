// Write a function that rotates the last n digits of a number. For the rotation, rotate by 
// one digit to the left, moving the first digit to the end.


/*
P: 
- Take a number as input, and a second input for how many digits (from the right) to rotate
- if rotation < 2, return input
- if rotation >= 2,
  - take the number at index [rotate] and move it to the end of the number

Input: number, number (key)
Output: number

E: 
below

D:
number -> string -> array of strings to rearrange -> string -> number output

A:
- Create a function rotateRightmostDigits with two number params, num and key
  - If key < 2
    - return num
  - convert number to string
  - convert string to array of characters
  - save the char in index key
  - starting at the key index to the end of the array
    - unless it is the final char
      - take the char at index i + 1 and insert it into array at current index
    - if it is the final char
      - insert the saved char into the array at current index
  - join and convert back to number
  - return

*/

function rotateRightmostDigits(num, key) {
  if (key < 2) {
    return num;
  }
  
  let arr = String(num).split('');
  let charToMove = arr[arr.length - key];
  for (let i = arr.length - key; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      arr[i] = charToMove;
    } else {
      arr[i] = arr[i + 1];
    }
  }
  return Number(arr.join(''));
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917