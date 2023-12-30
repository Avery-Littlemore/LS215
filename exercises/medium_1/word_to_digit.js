/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a 
"number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its 
corresponding digit character.

P:
- Take sentence string as argument
- find any number word within: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
- convert the num word to the num digit

Input: sentence string
output: string with num words replaced by nums

E: 
below

D: 
string -> array -> string

A:
- create a lowercase string variable which just carries every letter in the alphabet
- create a constant object converter with num words as key and num digit as value

- create function wordToDigit with one param string
  - split string into array of words (watch for 'four.' for example)  
  - iterate through each element
    - if element contains non-alpha character
      - slice it off and store
    - if converter contains the key of the current element, replace the current element with the converter value
      - restore sliced off char if needed
  - join the array back together with spaces between each digit and log

*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CONVERTER = {
  'zero': '0',
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function wordToDigit(str) {
  Object.keys(CONVERTER).forEach(word => {
    let regex = new RegExp(word, 'gi');
    str = str.replace(regex, CONVERTER[word]);
  });

  console.log(str);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."