// Write a function named myOwnEvery that's similar to the Array.prototype.every method. 
// It should take an array and a function as arguments, and return true if every element 
// passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
  // array.forEach(element => {
  //   if (!func(element)) {
  //     return false;
  //   }
  // });

  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }
  // If your code needs an early return while processing a list, consider using a for loop. 
  // The JavaScript list processing abstractions, other than every and some, all traverse the entire list, and that may be wasted effort.
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true


// secondary example:

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false