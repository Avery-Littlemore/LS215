// Challenge: write a method that changes strings in the date format 2016-06-17 to the format 17.06.2016. 
// You must use a regular expression and should use methods described in this section.

function formatDate(dateStr) {
  return dateStr.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)