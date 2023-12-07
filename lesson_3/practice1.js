// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. 
// If there are fewer than k distinct strings, return an empty string "".

// Note that the result string is the one encountered earliest in the array.

distinctString(["d","b","c","b","c","a"], 2); // "a"

// Will we always receive precisely two arguments? If not, what should I do if an argument is omitted? 
  // What should I do if there are more than two arguments?
// Will the first argument always be an array? If not, what should I do?
// Will the second argument always be an integer? If not, what should I do if it isn't?
// Will the second argument ever be 0? If so, what should I do?
// Will the second argument ever be negative? If so, what should I do?
// Can the array be sparse? If so, how should I handle the missing elements?
// Can the array contain any number of elements?
// Can the array be empty? If so, what should I return in that case?
// Will strings always be one character long, or can they be any length?
// Will k always be a positive number greater than 0? If not, how should I handle negative numbers and 0?
// Should I return an empty string if there aren't k distinct strings?