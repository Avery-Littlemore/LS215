// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
// You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, 
// or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/*
P:
- Take a string as input
- Reference a set of blocks defined above
  - Each block has two unique letters
  - Once a letter has been used, the other cannot be used
    - Only one letter per block is available to the user
- Determine whether or not the input word can be spelled with the blocks' constraints
- Case insensitive
- Assume always alphabetical input

Input: string
Ouptut: boolean

E: 
BATCH => true
BUTCH => false
jest => true

D:
Input: string, convert to array for simple iteration
Output: boolean
Blocks: object
i.e., blocks = { B: 'O',
                 X: 'K',
                 D: 'Q',
                 C: 'P',
                 N: 'A',
                 G: 'T',
                 R: 'E',
                 F: 'S',
                 J: 'W',
                 H: 'U',
                 V: 'I',
                 L: 'Y',
                 Z: 'M',

                 O: 'B',
                 K: 'X',
                 Q: 'D',
                 P: 'C',
                 A: 'N',
                 T: 'G',
                 E: 'R',
                 S: 'F',
                 W: 'J',
                 U: 'H',
                 I: 'V',
                 Y: 'L',
                 M: 'Z',
}

A:
- Create a blocks constant as defined above
- Create function isBlockWord with one string parameter
  - Upcase the string
  - Divide the string into an array of characters
  - Create a new (empty string) variable called verifiedLetters to containt vetted letters
  - Iterate through the array of characters
    - Check to see if the letter exists in the verifiedLetters string
      - If so, return false
      - if not, using the current letter as a key in the object blocks, check to see if the value exists in the verifiedLetters string
        - If so, return false
        - If not, add the current letter to the verifiedLetters string
  - If no failures occur, return true

*/

const BLOCKS = { B: 'O',
                 X: 'K',
                 D: 'Q',
                 C: 'P',
                 N: 'A',
                 G: 'T',
                 R: 'E',
                 F: 'S',
                 J: 'W',
                 H: 'U',
                 V: 'I',
                 L: 'Y',
                 Z: 'M',
                 O: 'B',
                 K: 'X',
                 Q: 'D',
                 P: 'C',
                 A: 'N',
                 T: 'G',
                 E: 'R',
                 S: 'F',
                 W: 'J',
                 U: 'H',
                 I: 'V',
                 Y: 'L',
                 M: 'Z',
                }

function isBlockWord(string) {
  string = string.toUpperCase();
  let stringArr = string.split('');
  let verifiedLetters = '';

  for (i = 0; i < stringArr.length; i += 1) {
    let letter = stringArr[i]
    let firstBlockRegex = new RegExp(letter);
    let secondBlockRegex = new RegExp(BLOCKS[letter])
    
    if (verifiedLetters.match(firstBlockRegex)) {
      return false;
    } else if (verifiedLetters.match(secondBlockRegex)) {
      return false;
    } else {
      verifiedLetters += letter;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
