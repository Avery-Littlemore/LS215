// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. 
// The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
P:
Input: Number (n)
Output: n strings
- n is an odd integer
- n >= 7
- displays a grid of n x n, with
  - the middle row containing n stars
  - the vertical column containing n stars
  - the diagonals containing n stars

E:
Input: 7
Rows...
1 -> 1 star, 2 spaces, 1 star, 2 spaces, 1 star => 4 spaces, 3 stars
2 -> 1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space => 4 spaces, 3 stars
3 -> 2 spaces, 3 stars, 2 spaces => 4 spaces, 3 stars
4 -> 0 spaces, 7 stars
5 -> 2 spaces, 3 stars, 2 spaces
6 -> 1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space
7 -> 1 star, 2 spaces, 1 star, 2 spaces, 1 star
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

Input: 9
All but middle row: spaces = n - 3
row # = the column # of the first star
row 1, spaces = 0, (n - 3) / 2
row 2, spaces = 1, (n - 3) / 2 - 1
row 3, spaces = 2, (n - 3) / 2 - 2
row 4, spaces = 3, (n - 3) / 2 - 3

1 -> 1 star, 3 spaces, 1 star, 3 spaces, 1 star => 6 spaces, 3 stars
2 -> 1 space, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 1 space => 6 spaces, 3 stars
3 -> 2 spaces, 1 star, 1 space, 1 star, 1 space, 1 star, 2 spaces => 6 spaces, 3 stars
4 -> 3 spaces, 3 stars, 3 spaces
5 -> 0 spaces, 9 stars

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *



D: 
Input: integer
Output: Array of n string elements -> log n strings

A: 
- Create function star with one number parameter n
  - create an array starArray
  - iterate from 1 to (n + 1) / 2, where current iteration is the row number |row|
    - push rowString to the starArray
      - rowString is made up of
        - space * (row - 1)
        - star * 1
        - space * ((n - 3) / 2 - (row - 1))
        - star * 1
        - space * ((n - 3) / 2 - (row - 1))
        - star * 1
        - space * (row - 1)
  - push to starArray n * stars
  - iterate from (n - 1) / 2 to 0, iteration is mirrorIndex
    - push to the star array the value of mirrorIndex 
  - iterate through each element
    - log to the console the current element

*/

function star(n) {
  let starArray = [];
  for (let row = 1; row < (n + 1) / 2; row += 1) {
    let rowString = ' '.repeat(row - 1);
    rowString += '*'
    rowString += ' '.repeat((n - 3)/2 - (row - 1))
    rowString += '*'
    rowString += ' '.repeat((n - 3)/2 - (row - 1))
    rowString += '*'
    starArray.push(rowString)
  }
  starArray.push('*'.repeat(n));
  for (let mirrorIndex = (n - 1) / 2 - 1; mirrorIndex >= 0; mirrorIndex -=1) {
    starArray.push(starArray[mirrorIndex]);
  }

  starArray.forEach(row => console.log(row));
}

star(7);
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *