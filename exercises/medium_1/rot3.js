/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed 
in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again 
to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first 
four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum 
rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) 
use the rotateRightmostDigits function from the previous exercise.

P: 
- Take number as input
- Rotate (shift) it by one digit to the left
  - AKA, move the first digit to the end
- Then, leave the first digit and rotate the rest
  - AKA, move the second digit to the end
- Repeat until you've pushed the second to last digit to the end

Input: number
Output: number

E: below
735291
352917
329175
321759
321597
321579
- n-1 transformations

D:
number -> string -> number

A:
- create function maxRotation with one param num
  - convert num to string
  - starting from n - 1 to 2
    - rotate the string using rotateRightmostDigits with current string and current iterator as arguments
      - reassign string
  - return string to num

*/

function maxRotation(num) {
  let numStr = String(num);
  for (let i = numStr.length; i >= 2; i -= 1) {
    numStr = String(rotateRightmostDigits(Number(numStr), i))
  }
  console.log(numStr)
}

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

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845