// Write a function that takes a string argument and returns a list of substrings of that string. 
// Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

function leadingSubstrings(str) {
  let counter = 1;
  let returnArr = [];
  while (counter <= str.length) {
    returnArr.push(str.slice(0, counter));
    counter += 1;
  }
  return returnArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]