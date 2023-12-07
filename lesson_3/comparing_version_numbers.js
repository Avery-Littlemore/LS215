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

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0
// - The rules to compare two version numbers
//   - start from the left most parts of the two version numbers
//   - if the number part of the first version number is larger, then the first version number is larger
//   - if the number part of the second version number is larger, then the first version number is smaller
//   - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
//     - do the same comparison and decide which version number is larger
//     - keep moving to the right until the result of the comparison is determined
//     - if we get to the last number part of the two version numbers and they're equal,
//       then the two version numbers are equal

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

1.a is not a valid version          // we only want to deal with numbers and dots
.1 and 1. are not valid versions    // versions must begin and end with a number
1..0 is not a valid version         // dots can only appear between two numbers
1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
1.0.0 is less than 1.1              // can handle version numbers with different lengths
1.0 is less than 1.0.5              // can handle version numbers with different lengths

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

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

// console.log(compareVersions('0.1', '1.0'));
// console.log(compareVersions('1', '1.0'));
// console.log(compareVersions('1.0', '1.1'));
// console.log(compareVersions('1.1', '1.2'));

// console.log(compareVersions('1.2.0.0.0.1', '1.2.0.0'));
// console.log(compareVersions('1.2.0.0.0.1', '1.2.0.0.0.1.0.1'));
// console.log(compareVersions('1.2.0.0', '1.2.0.0.0.1'));
// console.log(compareVersions('1.2.0.0.0.1.0.1', '1.2.0.0.0.1'));

// console.log(compareVersions('1.18.2', '1.2.0.0'));
// console.log(compareVersions('1.18.2', '13.37'));
// console.log(compareVersions('123,', '35'));
// console.log(compareVersions('123', '3_5'));
// console.log(compareVersions('1.3.a', '1.3.b'));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1