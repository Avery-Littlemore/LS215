// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
P:
- Take a number as input
- take each number starting from 1 until the number n
- for the first operand, sum all the integers and then square
- for the second operand, square all the digits then sum
- subtract the second operand from the first operand

E: below
D: nums

A: 
- create a function sumSquareDifference with parameter n
  - create a variable sumsToSqaure and set it to 0
  - create a varaible sumOfSquares and set it to 0 
  - iterate from 1 to n
    - add the current num to sumsToSqaure
    - square the current num and add it to sumOfSquares
  - return sumsToSqaure ** 2 - sumOfSquares

*/

function sumSquareDifference(n) {
  let sumsToSquare = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= n; i += 1) {
    sumsToSquare += i;
    sumOfSquares += i ** 2;
  }
  return sumsToSquare ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150