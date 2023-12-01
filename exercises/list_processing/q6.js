// Write a function that returns a list of all substrings of a string. Order the returned list by 
// where in the string the substring begins. This means that all substrings that start at index 
// position 0 should come first, then all substrings that start at index position 1, and so on. 
// Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

function substrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    // result.push(str.slice(i, 1));
    for (let j = i + 1; j <= str.length; j += 1) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]