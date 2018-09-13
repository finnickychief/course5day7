/*
  The sort method

  The built in sort method for arrays only sorts strings/numbers

  We can change the default functionality of sort by passing in a callback

  The structure of the callback is as follows:
    Two parameters
      leftItem
      rightItem
    A return statement
      Numeric value of any range(negative, positive, 0)

    How the sort works is by looking at the return value for any 2 given items in the array
    If the return value is 0 or negative, we want the item on the left to be further left in the resulting array
    If the return value is positive, we want the item on the left to be further right in the result array

    [4, 1, 6, 8, 2];
    After 1 pass
    [1, 4, 6, 2, 8]
    + 1 pass
    [1, 4, 2, 6, 8]

*/

let nums = [44, 1, 6, 8, 2];

nums.sort(); // Does not work because it uses the lexicographic values rather than numeric

// Default functionality for strings, that also works for numbers:
// Ascending order:
nums.sort((leftItem, rightItem) => {
  return leftItem - rightItem;
});

nums.sort((a, b) => a - b);

// Descending order
nums.sort((leftItem, rightItem) => {
  return rightItem - leftItem;
});

let stringAry = ['Hello', 'a', 'i', 'b', 'B'];

stringAry.sort((a, b) => {
  // Using numeric
  if (a > b) return 1;
  else return -1;
});

stringAry.sort((a, b) => (a > b ? 1 : -1));

// Sort an array of arrays by the length of the arrays within
let twoDAry = [
  [1, 4, 21, 6, 643],
  [1, 5],
  [5],
  [3143, 4, 34, 4, 32, 2, 1, 3],
  [17, 5, 3],
  [1, 2, 3, 4]
];

twoDAry.sort((a, b) => {
  // If the length of the left item is greater than the length of the right item, we want to swap them so return a positive value
  if (a.length > b.length) {
    return 1;
  } else {
    // They're already in the right place, so return a negative value
    return -1;
  }
});

twoDAry.sort((a, b) => {
  console.log(a, b);
  return a.length - b.length;
});
