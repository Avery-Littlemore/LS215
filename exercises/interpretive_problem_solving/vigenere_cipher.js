// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based 
// on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds 
// to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter 
// is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The 
// uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that 
// particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, 
// the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting 
// encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

/*
P: 
Input: string to transform, key string
Output: string
- Take a string as input and another string to use as an encoder
- Each letter of the key string corresponds to a number (key) as used in the caeser cipher
  - a = 0; A = 0; b = 1; etc.
- in order of appearance from left to right, each LETTER will be shifted by the value of the current letter of the key
  - cycle through the key string until the original text is entirely shifted
  - non-alpha chars are ignored

E:
plaintext: Pineapples don't go on pizzas!
keyword: meat

plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

D: 
text (string) -> textChars (array)
key (string) -> keyChars (array)
output textChars -> encoded text (string)

A: 
- Create a function vigenereEncrypt with two string params, text and key
  - divide the inputs into respective arrays, textChars and keyChars
  - create a counter for the keyIndex and set it to 0;
  - create an alphabet string to determine the number value of the key
  - iterate through the textChars
    - if the character is alpha
      - send it through the caesarEncrypt with the number value of the current key index
        - find the current value of the key index by referencing the key letter DOWNCASED against the alphaString (indexOf) and adding 1
        - replace current character in textChar with shifted char 
      - if the keyIndex is maxed, reset to 0
      - else, increment the key index by 1
  - return the encoded string joined back together

*/

const UPPERCASE_LOWER_BOUND = 'A'.charCodeAt();
const UPPERCASE_UPPER_BOUND = 'Z'.charCodeAt();
const LOWERCASE_LOWER_BOUND = 'a'.charCodeAt();
const LOWERCASE_UPPER_BOUND = 'z'.charCodeAt();

function vigenereEncrypt(text, key) {
  let textChars = text.split('');
  let keyIndex = 0;
  let alphaString = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < textChars.length; i += 1) {
    // console.log(textChars[i])
    if (textChars[i].match(/[a-z]/i)) {
      // console.log('here')
      // console.log(alphaString.indexOf(key[keyIndex]) + 1);
      textChars[i] = caesarEncrypt(textChars[i], alphaString.indexOf(key[keyIndex].toLowerCase()));
      if (keyIndex < key.length - 1) {
        keyIndex += 1;
      } else {
        keyIndex = 0;
      }
    }
  }
  return textChars.join('');
}

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

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereEncrypt('Dog', 'Rabbit'));
// Uoh