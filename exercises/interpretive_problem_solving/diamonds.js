// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

/*
P:
- Take a number as input
  - Assume number is always odd
- Output a diamond with n rows and n columns
- each row will increase in starts by 2 per row until it reaches n stars
Input: number (n for nxn grid)
Output: multi-line string

E:
Input: 1
Output:
*

Input: 3
Output:
Row 1: 1 space, 1 star, 1 space
Row 2: 0 space, 3 star, 0 space
Row 3: 1 space, 1 star, 1 space
 *
***
 *

spaces = (n + 1 - 2 * row) / 2 per row
stars = 1 + 2 * (row - 1)
Row 1: 4 space, 1 star, 4 space
Row 2: 3 space, 3 star, 3 space
Row 3: 2 space, 5 star, 2 space
Row 4: 1 space, 7 star, 1 space
Row 5: 0 space, 9 star, 0 space

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

D: 
Input: number
Output: strings

A: 
- Create a function diamond with parameter num
  - Create row varaible set to 1
  - Create an empty array
  - While row is less than or equal to num / 2 rounding down
    - insert (n - row) / 2 spaces
    - insert 1 + 2 * (row - 1) stars
    - insert (n - row) / 2 spaces
    - increment row by one
  - insert a row of stars equal to the num input

  - append the reversed array
  - console.log each of the rows


*/

function diamond(num) {
  let row = 1;
  let outputArray = [];
  while (row <= Math.floor(num / 2)) {
    let currentRow = '';
    currentRow += ' '.repeat((num + 1 - 2 * row) / 2);
    currentRow += '*'.repeat(1 + 2 * (row - 1));
    currentRow += ' '.repeat((num + 1 - 2 * row) / 2);
    outputArray.push(currentRow)
    row += 1;
  }
  outputArray.push('*'.repeat(num));
  for (let i = Math.floor(num/2) - 1; i >= 0; i -= 1) {
    outputArray.push(outputArray[i]);
  }

  outputArray.forEach(element => console.log(element))
}

diamond(1);
// *

diamond(3);
//  *
// ***
//  *

diamond(15);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *