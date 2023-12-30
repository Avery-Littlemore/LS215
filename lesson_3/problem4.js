// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because 
// we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different 
// separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range 
// limits are always inclusive.

// Your job is to return a list of complete numbers.
// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

/*
P:
Input: string
Output: string
Rules:
- Take a string of numbers as input
- String can be delimited by commas, or shown with ranges, or both
  - Ranges are shown using the following "separators": "-", ":", ".."
- Only the rightmost digit(s) are provided
  - If the digit provided is less than the previous digit, 10 must be added to it
  - If the digit provided is higher than the previous digit, it is within the same 10num block (i.e., 0-9, 10-19, etc.)
  - If a range is used:
    - If the number on the right is higher than the previous digit, it translates to a range of every number between the lower digit to the upper
    - If the number on the right is lower, it translates to a range of every number between the lower digit and the upper + 10
    - If a range is shown with multiple separators, consider each independently**

E: 
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21

// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112

// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

D: 
Input: string of numbers and separators
Output: string of numbers

A: 
- Create a function called decipherShortHand with one string parameter
  - Create an empty results array
  - Convert the param string into an array of string numbers
    - Split by commas and spaces (', '). Keep ranges together
    - If the first element contains no ranges
      - push it to the empty results array
    - Else if the first element contains a range...
      - split it by the range and push the first element to the results array

    - Iterate through the rest of the array
      - If it has a leading zero...
        - do something

      - If the next element has no range
        - If it is greater than the previous number
          - push it to the array
        - If it is less than the previous number
          - If the length is equal, add 10
          - If the length is not equal
            - 
          - push it to the array



*/

function parseRange(range, results) {
  let stringNums;
  if (range.match(/[-:]/)) {
    stringNums = range.split(/[-:]/);
  } else {
    stringNums = range.split(/\.\./);
  }
  
  if (!results[results.length - 1]) {
  for (let i = 0; i < stringNums.length - 1; i += 1) {
      let counter = Number(stringNums[i]);
      let max = Number(parseNum(stringNums[i + 1], results, String(counter)));
      while (counter <= max) {
        results.push(String(counter));
        counter += 1;
      }
    }
    return results;
  }

  for (let i = 0; i < stringNums.length - 1; i += 1) {
    let counter = Number(parseNum(stringNums[i], results));
    let max = Number(parseNum(stringNums[i+1], results));
    while (counter <= max) {
      results.push(String(counter));
      counter += 1;
    }
  }
  return results;
}

function parseNum(current_num, results, override = undefined) {
  let last_num;
  if (override) {
    last_num = override;
  } else if (!results[results.length - 1]) {
    return current_num
  } else {
    last_num = results[results.length - 1]
  }
  
  if (current_num.length < last_num.length) {
    let difference = last_num.length - current_num.length
    current_num = last_num.slice(0, difference) + current_num
    if (Number(current_num) > Number(last_num)) {
      return current_num
    } else if (current_num.length === last_num.length) {
      return String(Number(current_num) + 10 ** (current_num.length - difference));
    }
  } else if (Number(current_num) > Number(last_num)) {
    return current_num
  } else if (current_num.length === last_num.length) {
    return String(Number(current_num) + 10);
  }
  
  return current_num
}

function decipherShortHand(string) {
  let results = [];
  let stringNums = string.split(', ');
  
  for (let i = 0; i < stringNums.length; i += 1) {
    if (stringNums[i].match(/[-:]/) || stringNums[i].match(/\.\./)) {
      results = (parseRange(stringNums[i], results));
    } else {
      results.push(parseNum(stringNums[i], results));
    }
  }
  return results;
}

console.log(decipherShortHand("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
console.log(decipherShortHand("1-3, 1..2"));         // 1, 2, 3, 11, 12
console.log(decipherShortHand("1:5:2"));            // 1, 2, 3, 4, 5, 6, ... 12
console.log(decipherShortHand("104-2"));            // 104, 105, ... 112
console.log(decipherShortHand("104-02"));           // 104, 105, ... 202
console.log(decipherShortHand("545, 64:11"));       // 545, 564, 565, .. 611   
