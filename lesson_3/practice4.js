// ​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. 
// Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

// Will we always receive precisely one argument? If not, what should I do if the array is omitted? 
  // What should I do if there is more than one argument?
// Will the argument always be an array? If not, what should I do?
// Will all the elements of the array argument be arrays themselves? If not, what should I do?
// Can the sub-arrays contain NaN values? If so, do I have to remove duplicate NaNs?
// Can the sub-arrays contain other primitive values besides digits and characters? If so, how should I handle those?
// Can the sub-arrays contain object or array values? If so, how should I handle those?
// If objects are allowed, would they be considered identical if key-value pairs are the same, for example: {a: 1} and {a: 1}?
// Can the array be sparse? If so, how should I handle the missing elements?
// Can the array contain any number of subarrays?
// Can the sub-arrays be empty? What should I do in this case?
