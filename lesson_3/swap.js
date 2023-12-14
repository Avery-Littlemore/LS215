// After watching others code, benefiting from their experience and learning from their mistakes, 
// it's time to get some more practice applying what you've learned.

// Note that the given test cases may not be sufficient to cover all the problem requirements and edge cases. 
// You need to ask questions and create additional test cases on your own. We provide some potential questions and test cases below.

// Problem Description
// Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have taken 
// the place of the numeric characters, and vice versa.

/*
Questions:
will there be repeating characters?

P: 
- Take a string
- swap the positions of the alphabetical characters and the numerical characters

Implicit:
- Whichever category has fewer characters, that is the number of swaps that will be done
  - i.e., if there are x letters and x-1 numbers, make x-1 swaps then return
Input: string
Output: new string

D: string as input
split the string to an array so we can deal with indexes
output will be the rearranged array joined

A:
- Create a function swap with one string paramter
  - split the input string into an array
  - create an empty result array
  - create letterIndex = 0;
  - create numberIndex = 0;
  - iterate through array
    - if character is a number
      - find the next letter by checking each character from index letterIndex
      - when a letter is found, insert the number at that letter's index
      - if letterIndex becomes greater than the array length, insert the number at its own index
    - if the character is a letter
      - find the next number by checking each char from index numberIndex
      - when a number is found, insert the letter at that number's index
      - if numberIndex becomes greater than the array length, insert the letter at its own index

  - return array.join('')
*/

function swap(str) {
  let array = str.split('');
  let result = [];
  let letterCount = str.replace(/[^a-z]/gi, '').length;
  let numberCount = str.replace(/[^0-9]/gi, '').length;
  let maxTransforms
  if (letterCount > numberCount) {
    maxTransforms = numberCount;
  } else {
    maxTransforms = letterCount;
  }
  let letterTransforms = 0;
  let numberTransforms = 0;
  let letterIndex = 0;
  let numberIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].match(/[a-z]/i)) {
      if (letterTransforms === maxTransforms) {
        result[i] = array[i];
        continue;
        
      }
      for (numberIndex; numberIndex < array.length; numberIndex += 1) {
        if (array[numberIndex].match(/[0-9]/)) {
          result[numberIndex] = array[i];
          numberIndex += 1;
          letterTransforms  += 1;
          break;

        }
      } 
    } else if (array[i].match(/[0-9]/)) {
      if (numberTransforms === maxTransforms) {
        result[i] = array[i];
        continue;

      }
      for (letterIndex; letterIndex < array.length; letterIndex += 1) {
        if (array[letterIndex].match(/[a-z]/i)) {
          result[letterIndex] = array[i];
          letterIndex += 1;
          numberTransforms += 1;
          break;

        }
      }
    } else {
      result[i] = array[i];
    }
  }
  // console.log(array);
  // console.log(result);
  return result.join('')
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("1a2b3cd") === "a1b2c3d"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("") === ""); // true

console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true