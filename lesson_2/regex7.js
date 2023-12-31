// Challenge: write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. 
// You must use a regular expression and should use methods described in this section.

function formatDate(dateStr) {
  return dateStr.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1').replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)