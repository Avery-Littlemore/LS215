/*
A triangle is classified as follows:
Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings 
representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also 
assume that the arguments are in degrees.

P: 
- Classify the triangle type, or specify that it is invalid
- right angles have one angle that is 90deg
- acute has all three angles < 90deg
- obtuse has one angle greater than 90deg
- invalid has either a non-180deg sum, or an angle which is 0deg

E:
below

A:
- create a function triangle
  - check for invalids;
    - if sum of degs doesn't equal 180 or if any are 0
      - return 'invalid
  - if one of the degrees is 90
    - right
  -if one of the degrees > 90
    - obtuse
  - else
    - acute
*/

function triangle(angle1, angle2, angle3) {
  let angleArr = [angle1, angle2, angle3].sort((a, b) => a - b);
  if (angle1 + angle2 + angle3 !== 180 || angleArr[0] === 0) {
    return 'invlaid';
  }

  if (angleArr[2] > 90) {
    return 'obtuse';
  } else if (angle1 === 90 || angle2 === 90 || angle3 == 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"