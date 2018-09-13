/*
  Array Methods:
    map - Returns an array of the exact same size
    filter - Returns an array of the same or (more often)less size
    reduce - One item, which can be any data type(String, Number, Object, Array)

  Common parameters for the callback:
    1: Item
    2: Index
    3: Original Array
    For reduce:
      Has an accumulator first, then the 3 other parameters
      Also has an optional second parameter after the callback for initial value of the accumulator. If this is not provided, we use the first item of the array for the accumulator.

    The callback provides the logic for the operations in our methods

*/
// Map examples:
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Double the array:
numArray.map(item => item * 2);

// Halve the array:
numArray.map(item => item / 2);

// Square the array:
numArray.map(item => item ** 2);

// Create an array of HTML elements based on your input
numArray.map(item => {
  // Create a paragraph tag with the number placed in the innerHTML
  let element = document.createElement('p');
  element.innerHTML = item;
  return element;
});

// Filter operations:

// Filter out the even numbers
numArray.filter(item => item % 2); // If it's even, item%2 will return 0 which is a falsy value, which means the filter will not keep it
numArray.filter(item => item % 2 === 1); // More explicit version saying to keep only odd numbers

// Filter out names that begin with J
let nameAry = ['Jeff', 'Sarah', 'Jennifer', 'John', 'Roger', 'Phil'];

nameAry.filter(name => name[0].toLowerCase() !== 'j');

// name.toLowerCase() returns 'jeff' for the first item. Then we run .startsWith('j') on 'jeff', which will return true. Then, the true is flipped by the ! operator
nameAry.filter(name => !name.toLowerCase().startsWith('j'));

// Filter out arrays that are of size 3
let twoDAry = [[1, 2, 3], [4, 5, 6, 7], [8, 9], [10, 11, 12], [13, 14, 15]];

twoDAry.filter(arr => arr.length !== 3);

// Reduce

// Sum an array of numbers
numArray.reduce((acc, num) => {
  return acc + num;
});

// 'Flatten' an array of arrays
// Flatten means to create a single array, based on the order of the arrays of the arrays inside
// Our 2d array should become [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
twoDAry.reduce((acc, ary) => {
  // Use concat to merge 2 arrays. Concat returns a NEW array, it does not modify the existing one so we have to set the value
  acc = acc.concat(ary);
  return acc;
}, []);

twoDAry.reduce((acc, ary) => {
  return [...acc, ...ary];
}, []);

// Find the smallest item of an array
numArray.reduce((acc, num) => {
  return Math.min(acc, num);
}); // DO NOT specify the initialValue, because our array may contain only items that are larger than 0

// Another solution without reduce:
Math.min(...numArray);

// charMap out of a sentence
let sentence = 'This is a sentence for examples';

let splitSentence = sentence.split('');

splitSentence.reduce((acc, character) => {
  if (acc[character]) acc[character]++;
  else acc[character] = 1;
  return acc;
}, {});
