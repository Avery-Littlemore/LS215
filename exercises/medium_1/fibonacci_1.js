/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, 
and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th 
Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the 
first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

P:
- First two numbers are 1 always
- Each subsequent number is the sum of the previous two numbers
- Return the first fib number that has the number of digits specified in the argument 

Input: Num (length of digits)
Output: Num (first index of n digits)

E: 
below

D:
number -> increment fibonacci until length is reached, i.e., try changing to string to confirm length -> number (index/iteration)

A:
- Create a function findFibonacciIndexByLength with one param numLength
  - set var index to 1
  - set numsArr to [1, undefined]
  - While numsArr[0] to string length is less than numLength
    - incremenet by fibonacci pattern
      - use helper method fib with arguments currentNum (aka, numsArr[0]), and previous num (aka, numsArr[1])
        - set returnArr to return value of fib
    - increment index by 1
  - return index


- Helper method fib with param num and prevNum
  - if num is 1 and prevNum is undefined
    - next num is 1
  - else if num is 1 and index is 1
    - next num is 2
  - else
    - next num is current num plus previous num 
  - return [newNum, previousNum]

*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

// function findFibonacciIndexByLength(numLength) {
//   let index = 1n;
//   let numsArr = [1, undefined];
//   while (String(numsArr[0]).length < numLength) {
//     numsArr = fib(numsArr[0], numsArr[1]);
//     index += 1n;
//   }
//   // console.log(index);
//   return index;
// }

// function fib(currentNum, prevNum) {
//   if (prevNum === undefined) {
//     return [1, 1];
//   } else {
//     return [currentNum + prevNum, currentNum];
//   }
// }

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.