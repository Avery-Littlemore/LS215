// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array 
// containing the products of all combinations of number pairs that exist between the two arrays. The returned 
// array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(array1, array2) {
  let newArr = [];
  array1.forEach(el1 => {
    array2.forEach(el2 => {
      newArr.push(el1 * el2)
    });
  });
  return newArr.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]