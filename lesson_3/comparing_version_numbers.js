// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a 
// more complicated number system. The following are all legal version numbers:
// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and compares them, with the result of this 
// comparison showing whether the first is less than, equal to, or greater than the second version:
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.

// Here is an example of version number ordering:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
P: 
Input: string1, string2 (can't have multiple dots in a number)
Output: number
  - If version1 > version2, we should return 1.
  - If version1 < version2, we should return -1.
  - If version1 === version2, we should return 0.
  - If either version number contains characters other than digits and the . character, we should return null.

Rules: 
  - if there exists any character that is not a digit or a ., return null
  - compare numbers from left to right, delimited by dots 
  - If numbers are equal, move to the next number
  - If numbers aren't equal, assess which is greater
    - 1 = 1.0, i.e.,
      - if one number has a non-zero number and the other has no number, the first is greater
      - if one number has a zero and the other has no number, they are equal
  - once a greater than or less than is found, return appropriate number

Examples:
0.1 < 1 => -1
1 = 1.0 => 0
1.0 < 1.1 => -1
1.1 < 1.2 => -1
1.2 = 1.2.0.0 => 0
1.2.0.0 < 1.18.2 => -1
1.18.2 < 13.37 => -1
123, vs 35 => null
1.3.a vs 1.3.b => null

Data Structures:
- Input strings of numbers
  - split into array of numbers (delimited by dots)
  - compare numbers
- output number (or null)

Algorithm:
- Create function with two comparative strings as parameters
  - check first if there are any non-numeric or dot characters
    - if yes, return null
  - use split method to divide strings into arrays
  - determine which has a larger length (if neither, choose version1), and iterate through each of its elements, including index as well
    - compare numbers
      - If comparator1 > comparator2, we should return 1.
      - If comparator1 < comparator2, we should return -1.
      - If comparator1 === comparator2, move to the next iteration
      - If comparator2 doesn't have an element at the index
        - If comparator1 has 0 at index, return 0
        - If comparator1 has a number > 0 at index, return 1


*/

function compareVersions(version1, version2) {
  if (version1.match(/[^0-9.]/) || (version2.match(/[^0-9.]/))) {
    return null;
  }

  let result;
  let split1 = version1.split('.');
  let split2 = version2.split('.');

  if (split1.length >= split2.length) {
    split1.forEach((subVersion, index) => {
      while (result === undefined) {
        if (split2[index] === undefined) {
          if (subVersion > 0) {
            result = 1;
          } else {
            result = 0;
          }
        } else if (subVersion > split2[index]) {
          result = 1;
        } else if (subVersion < split2[index]) {
          result = -1;
        } else if (subVersion === split2[index]) {
          result = 0;
        } 
      }
    });
  } else {
    
  }
  
  return result;

}

console.log(compareVersions('0.1', '1.0'));
console.log(compareVersions('1', '1.0'));
console.log(compareVersions('1.0', '1.1'));
console.log(compareVersions('1.1', '1.2'));
// console.log(compareVersions('1.2', '1.2.0.0'));
// console.log(compareVersions('1.2.0.0', '1.18.2'));
// console.log(compareVersions('1.18.2', '13.37'));
// console.log(compareVersions('123,', '35'));
// console.log(compareVersions('123', '3_5'));
// console.log(compareVersions('1.3.a', '1.3.b'));