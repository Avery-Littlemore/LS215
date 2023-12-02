// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether 
// a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but 
// should not be counted when determining the appropriate case.

function staggeredCase(str) {
  let currentCase = 'upper';
  return str.split('').map(char => {
    if (currentCase === 'upper' && char.match(/[a-z]/i)) {
      currentCase = 'lower';
      return char.toUpperCase();
    } else if (currentCase === 'lower' && char.match(/[A-Z]/i)) {
      currentCase = 'upper';
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"