/*
'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, 
it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an 
array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of 
each pair of consecutive elements are compared. If the first value is greater than the second, the two elements 
are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point 
the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means 
that the entire array is sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array 
contains at least two elements.

P:
- Take an array of at least two elements
- starting with the first two elements, compare and discern which is larger
- if the second compared element is larger than the first, swap the elements
- if the second compared element is smaller, leave the elements and move on to the next

Input: array (of numbers or strings)
Output: array

E: below

D: arrays

A:
- create a function bubbleSort with one parameter array
  - create var foundSwap
  - enter a do while loop, which iterates through the elements, starting at 0 and ending at the n - 1 element
    - set foundSwap to false
    - compare the current element with the next element
    - if the first element is larger, swap the elements and set foundSwap to true
  - if foundSwap is true, set foundSwap to false and repeat the iteration
*/

function bubbleSort(array) {
  let foundSwap;
  do {
    foundSwap = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        foundSwap = true;
      }
    }
  } while (foundSwap === true);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]