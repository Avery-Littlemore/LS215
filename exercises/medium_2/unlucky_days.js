// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 
// You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
// You may also assume that the same calendar will remain in use for the foreseeable future.

/*
P: 
Input: year number
Output: number of friday the 13ths that year


*/

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2