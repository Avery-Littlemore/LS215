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
- There are spelling blocks as outlined above
- Once a letter is used on a block, the other letter cannot be used, nor can the same letter again
- Take a word as input
- Return true if the word can be spelled with the restrictions above
- Return false if not
- Case insensitive

Input: string
Output: boolean

E: below
D: string -> array of chars -> boolean

A: 
- create a constant array of subarrays, each with a block

- create a function isBlockWord with one string param
  - split the string into characters
  - create a variable usedBlocks and set it to an empty array
  - iterate through the chars
    - capitalize the current char
    - check if the char exists in the usedBlocks array
      - if so, return false
    - check if the char exists in the const array
      - if so, add the subarray to the usedBlocks array
      - if not, return false
  - return true

*/
"use strict"

const BLOCKS = [['B','O'], 
                ['X', 'K'],
                ['D','Q'],
                ['C', 'P'],
                ['N', 'A'],
                ['G', 'T'], 
                ['R', 'E'],
                ['F', 'S'],
                ['J', 'W'],
                ['H', 'U'],
                ['V', 'I'],
                ['L', 'Y'],
                ['Z', 'M'],
                ]
  
function isBlockWord(string) {
  let chars = string.split('');
  let usedBlocks = [];
  let char;
  let filteredBlocks;
  for (let i = 0; i < chars.length; i += 1) {
    char = chars[i].toUpperCase();
    // console.log(usedBlocks);
    // console.log(char);
    if (usedBlocks.includes(char)) {
      return false;
    } else {
      filteredBlocks = BLOCKS.filter(subArr => subArr.includes(char));
      if (filteredBlocks.length > 0) {
        filteredBlocks.forEach(subArr => {
          subArr.forEach(letter => usedBlocks.push(letter))
        });
        // console.log(filteredBlocks)
        // usedBlocks = usedBlocks.flat();
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
