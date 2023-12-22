/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. 
In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely 
slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, 
you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

P:
- write a non-recursive (aka, procedural) function to find the fibonacci numbers

input: num
output: num

E: below
D: nums, maybe arrays to store the fib numbers
A:
- create a function fibonacci with one param n
  - create currentNum varaible and set to 1
  
  - if n === 1 || n === 2
    - return 1
  - else
    - create an array of two elements each holding the number 1
  - iterate from 3 to n
    - push to the array the sum of the previous two elements (i - 2, i - 3)
  - return the last element

*/

function fibonacci(n) {
  if (n === 1 || n === 2)  {
    return 1;
  } 
  let fibArr = [1, 1];
  for (let i = 3; i <= n; i += 1) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 3])
  }
  console.log(fibArr[n-1])

  // let previousTwo = [1, 1];

  // for (let counter = 3; counter <= nth; counter += 1) {
  //   previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  // }

  // return previousTwo[1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050