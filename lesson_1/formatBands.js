// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// function processBands(data) {
//   changeToCanada(data);
//   capitalizeBandName(data);
//   removeDots(data);
//   return data;
// }

// function changeToCanada(data) {
//   data.forEach(band => band.country = 'Canada');
// }

// function capitalizeBandName(data) {
//   data.forEach(band => band.name = band.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '));
// }

// function removeDots(data) {
//   let index = 0;
//   while (index < data.length) {
//     if (data[index].name.indexOf('.') > 0) {
//       let badIndex = data[index].name.indexOf('.');
//       data[index].name = data[index].name.slice(0, badIndex) + data[index].name.slice(badIndex + 1);
//     }
//     index += 1;
//   }
// }

function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]