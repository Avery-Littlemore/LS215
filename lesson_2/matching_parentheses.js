// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, 
// false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

function isBalanced(string) {
  let chars = string.split('');
  let openParentheses = 0;
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') {
      openParentheses += 1;
    } else if (chars[i] === ')') {
      openParentheses -= 1;
    }
    if (openParentheses < 0) {
      return false;
    }
  }
  return openParentheses === 0
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false