// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/*
P: 
- Take an array as input
- "Rotate" the array
  - take the first element in the array and "move it" to the last element of the array
- if the input is not an array, return undefined
  - Array.isArray(input)
- if array is empty, return empty array
- original array remains untouched

E: below

D: 
Input: array
Output: New array

A:
- create a function rotateArray with one param inputArr
  - check edgecases 
    - if it is not an array, return undefined
    - if it is an empty array, return an empty array
  - create a new variable rotatedArr
  - iterate from 1 to inputArr.length with iterator idx
    - push the element at index idx to the rotatedArr
  - push the index 0 element from inputArr to rotatedArr
  - return rotatedArr

*/

function rotateArray(inputArr) {
  if (!(Array.isArray(inputArr))) {
    return undefined;
  } else if (inputArr.length === 0) {
    return [];
  }

  // let rotatedArr = [];
  // for (let idx = 1; idx < inputArr.length; idx += 1) {
  //   rotatedArr.push(inputArr[idx]);
  // }
  // rotatedArr.push(inputArr[0]);
  // return rotatedArr;


  return inputArr.slice(1).concat(inputArr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]