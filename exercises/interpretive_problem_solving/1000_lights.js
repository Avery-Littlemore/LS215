// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. 
// You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. 
// On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time 
// toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/*
P:
- Take a number of switches as input (n)
- n times, iterate through each of the switches
- on the first pass, toggle every 1 switch
- on the second pass, toggle every other switch/2 switches
- on the third pass, toggle every three switches

Input: number of switches
Output: Array of lights that are ON after n repititions, with n being number of switches (input)

E:
Round 1: all lights are on
Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

D:
Input: number (n)
number -> array of length n. Set all elements to their index + 1. Off elements will be set equal to 0
output: cleaned array with any non-zero results

A:
- create a function lightsOn with one number input switches
  - create an empty array with n elements
  - iterate through the array with iterator i
    - create an inner iteration with iterator j
      - if (i + 1 % j + 1 === 0)
        - toggle element j
  - map array such that all elements that are on (1), replace 1 with index + 1
  - filter out any array elements that are 0
  - return filtered array

      

- helper method toggle with one input number
  - if 1, return 0
  - if 0, return 1


*/

function lightsOn(switches) {
  let array = Array(switches);
  for (let i = 0; i < array.length; i += 1) {
    array[i] = 0;
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if ((j + 1) % (i + 1) === 0) {
        array[j] = toggle(array[j])
      }
    }
  }

  array = array.map((element, index) => {
    if (element === 1) {
      return index + 1;
    } else {
      return 0;
    }
  });

  return array.filter(element => element !== 0);

}

function toggle(num) {
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 0;
  }
}

// console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]