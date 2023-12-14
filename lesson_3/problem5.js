// Implement encoding and decoding for the rail fence cipher.
// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. 
// It was already used by the ancient Greeks.
// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving 
// up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// Then reads off:
// WECRLTEERDSOEEFEAOCAIVDEN

// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.
// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// The first row has seven spots that can be filled with "WECRLTE".
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Now the 2nd row takes "ERDSOEEFEAOC".
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Leaving "AIVDEN" for the last row.
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// If you now read along the zig-zag shape you can read the original message.

/*
P:
- Implement encoding AND decoding for the rail cypher
- Rules:
  - A message is transmitted with consecutive letters and read row by row
  - The message is read by parsing the letters in zig-zag fashion
    - Can also be read by incrementing through the indexes
    - Only one letter will be visibile at each index, and that will be the next letter in the deciphered sequence
  - There are 3 dots between letters on the first and third rows
  - There is one dot between each of the second row's letters
    - Always start with the first row
    - Second row always has one dot before its first letter
    - Third row always has two dots before its first letter
  - spaces are removed

  - n is number of characters
  - Second row has n / 2 (round down) characters
  - First row has 1 + n / 4 (round down) characters
  - Third row has (n + 1) / 4  (round down) characters
Input: string
Output: string

E:
Decoded: "WE ARE DISCOVERED FLEE AT ONCE":
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

Encoded: "WECRLTEERDSOEEFEAOCAIVDEN"
25 letters
WECRLTE => 7 letters
ERDSOEEFEAOC => 12 letters
AIVDEN => 6 letters

"Hello World"
H . . . O . . . L .
. E . L . W . R . D
. . L . . . O . . .

Encoded: "HOLELWRDLO"
10 letters
HOL => 3
ELWRD => 5
LO => 2

D:
Inputs and outputs will be a single string
Coded messages will consist of three arrays of string characters (first row, second row, third row)

A:
- Create a function railFenceEncode with one string parameter
  - remove spaces
  - divide string into array of characters
  - Create an zigzag with three elements
  - Create a boolean variable called increasing and set it to true
  - Create a variable indexPosition and set it to zero
  - Iterate through array of characters
    - insert the current character into the array with the index of indexPosition
    - If the indexPosition is 0
      - Set increasing to true
      - Increment the indexPosition by 1
    - Else if the indexPosition is 1
      - Increment the indexPosition by 1 if increasing is true
      - Decrement the indexPosition by 1 if increasing is false
    - Else if the indexPosition is 2
      - Set increasing to false
      - Decrement the indexPosition by 1
  - Create an empty string variable result
  - Implement a for loop to iterate through each of the zigzag elements (inner arrays)
    - flatten the current array element and concat it to the result variable
  - Return the result variable

- Create a function railFenceDecode with one string parameter
  - Create an zigzag with three elements
  - Count letters in the string and set to new variable maxIndex
  - Determine how many characters in each row and populate three individual strings with that many letters
    - First row has 1 + n / 4 (round down) characters
    - Second row has n / 2 (round down) characters
    - Third row has (n + 1) / 4  (round down) characters
  - For each new string created, convert it to the coded version with applicable dots between
    - i.e, until the maxIndex is reached...
      - First row: If index % 4 === 0, insert character, else, insert .
      - Second row: If index % 2 === 1, insert character, else, insert .
      - Third row: if (index + 1) % 4 === 0, insert character, else, insert .
  - Convert three strings into arrays
  - Create an empty result string
  - Set indexPosition to zero
  - Iterate from 0 to maxIndex
    - Check first row array at index indexPosition
      - If a non-dot character exists, concat it to the result string
    - Repeat for second and third rows
  - Return result string

*/

function railFenceDecode(string) {
  let zigzag = []
  let stringLength = string.length;
  let maxIndex = stringLength - 1;
  let firstRowCount = 1 + Math.floor(stringLength/4);
  let secondRowCount = Math.floor(stringLength/2);
  let thirdRowCount = Math.floor(stringLength + 1/4);
  let firstRow = string.slice(0, firstRowCount)
  let secondRow = string.slice(firstRowCount, firstRowCount + secondRowCount)
  let thirdRow = string.slice(firstRowCount + secondRowCount)
  let firstRowChars = []
  let secondRowChars = []
  let thirdRowChars = []
  for (let i = 0; i <= maxIndex; i += 1) {
    if (i % 4 === 0) {
      firstRowChars.push(firstRow.slice(0,1))
      firstRow = firstRow.slice(1)
    } else {
      firstRowChars.push('.')
    }
    if (i % 2 === 1) {
      secondRowChars.push(secondRow.slice(0,1))
      secondRow = secondRow.slice(1)
    } else {
      secondRowChars.push('.')
    }
    if ((i + 2) % 4 === 0) {
      thirdRowChars.push(thirdRow.slice(0,1))
      thirdRow = thirdRow.slice(1)
    } else {
      thirdRowChars.push('.')
    }
  }

  let result = '';
  let indexPosition = 0;
  while (indexPosition <= maxIndex) {
    if (firstRowChars[indexPosition].match(/[a-z]/i)) {
      result += firstRowChars[indexPosition]
    } else if (secondRowChars[indexPosition].match(/[a-z]/i)) {
      result += secondRowChars[indexPosition]
    } else if (thirdRowChars[indexPosition].match(/[a-z]/i)) {
      result += thirdRowChars[indexPosition]
    }
    indexPosition += 1;
  }
  return result;
}

function railFenceEncode(string) {
  string = string.split(/\s+/).join('');
  let chars = string.split('');
  let zigzag = [[], [], []];
  let increasing = true;
  let indexPosition = 0;
  chars.forEach(char => {
    zigzag[indexPosition].push(char);
    if (indexPosition === 0) {
      increasing = true;
      indexPosition += 1;
    } else if (indexPosition === 1) {
      if (increasing) {
        indexPosition += 1;
      } else {
        indexPosition -= 1;
      }
    } else {
      increasing = false;
      indexPosition -= 1;
    }
  });

  let result = ''
  for (let i = 0; i < zigzag.length; i += 1) {
    result += zigzag[i].join('');
  }
  return result;
}



let string1 = "WE ARE DISCOVERED FLEE AT ONCE";
let string2 = 'HELLO WORLD';

// console.log(railFenceEncode(string1));
// console.log(railFenceEncode(string2));

let string3= 'WECRLTEERDSOEEFEAOCAIVDEN';
let string4 = 'HOLELWRDLO';

console.log(railFenceDecode(string3));
console.log(railFenceDecode(string4));