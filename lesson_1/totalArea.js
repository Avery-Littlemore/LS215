// Write a Function named totalArea that takes an Array of rectangles as an argument. 
// The Function should return the total area covered by all the rectangles.

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  let sumOfAreas = areas.reduce((sum, area) => sum + area);
  return sumOfAreas;
}

function totalSquareArea(potentialSquares) {
  let actualSquares = potentialSquares.filter(potentialSquare => potentialSquare[0] === potentialSquare[1]);
  return totalArea(actualSquares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

console.log(totalSquareArea(rectangles));    // 121