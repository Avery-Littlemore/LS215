// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so 
// that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter 
// located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be 
// substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded 
// using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters 
// are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from 
// the beginning.

/*
P:
- "Shift" (or rotate) each letter by the value of the key
- Retain case
- All non-alpha chars are left
- Wrap letters that go beyond the end of the alphabet

Input: string
Output: string

E: 
'A', 0 => 'A'
'A', 3 => 'D'
'y', 5 => 'd'
'a', 47 => 'v'

'ABCDEFGHIJKLMNOPQRSTUVWXYZ' => 'ZABCDEFGHIJKLMNOPQRSTUVWXY'
'The quick brown fox jumps over the lazy dog!' => 'Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!'
'There are, as you can see, many punctuations. Right?; Wrong?' => 'Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?'

D: 
string -> divide string into chars and shift each individually -> convert back into string for output

A:
- Create a function casearEncrypt with one string param and one number param
  - Split the string into individual chars
  - iterate through each char
    - if char is within the alphabet
      - shift it by the key
        - can use charcodes here to shift
        - if uppercase, stay within the uppercase bounds
          - i.e., if charcode exceeds the max #, subtract 26 (maybe 25?)
        - if lowercase, stay within the lowercase bounds
  - join the array and return
*/

const UPPERCASE_LOWER_BOUND = 'A'.charCodeAt();
const UPPERCASE_UPPER_BOUND = 'Z'.charCodeAt();
const LOWERCASE_LOWER_BOUND = 'a'.charCodeAt();
const LOWERCASE_UPPER_BOUND = 'z'.charCodeAt();

function caesarEncrypt(string, key) {
  let chars = string.split('');
  for (let i = 0; i < chars.length; i += 1) {
    let charCode = chars[i].charCodeAt();
    if (charCode <= UPPERCASE_UPPER_BOUND && charCode >= UPPERCASE_LOWER_BOUND) {
      charCode += key;
      if (charCode > UPPERCASE_UPPER_BOUND) {
        charCode -= 26;
      }
      chars[i] = String.fromCharCode(charCode);
    } else if (charCode <= LOWERCASE_UPPER_BOUND && charCode >= LOWERCASE_LOWER_BOUND) {
      charCode += key;
      if (charCode > LOWERCASE_UPPER_BOUND) {
        charCode -= 26;
      }
      chars[i] = String.fromCharCode(charCode);
    } 
  }
  return chars.join('');
}

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"


console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"