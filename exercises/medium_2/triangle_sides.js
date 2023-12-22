/*
A triangle is classified as follows:
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings 
representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

P:
- Equilateral: All three sides are of equal length.
- Isosceles: Two sides are of equal length, while the third is different.
- Scalene: All three sides are of different lengths.
- Must have the sum of two shortest sides be greater than the longest side
- every side must have a length > 0
- return the classification
Input: 3x nums
Output: string (classification)

E: below

D: nums into string

A: 
- create a function triangle with three params side1,2,3
  - sort them in an array, to go from smallest to largest
  - check for invalids
    - if smallest 2 sides sum to less than longest side
    - if any side is 0
      - return 'invalid'
  - if all sides are equal
    - return 'equilateral'
  - if two sides are equal
    - return 'isosceles'
  - if none
    - return 'scalene'

*/

function triangle(side1, side2, side3) {
  let orderedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (orderedSides[0] === 0 || orderedSides[0] + orderedSides[1] < orderedSides[2]) {
    return 'invalid';
  }

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"