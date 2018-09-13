/*
  Prototypes
  Callbacks to other array methods - Sort
  Nested loops
  Spread operator
*/

// Prototypes
/*
  Prototypes are a way to expand or redefine existing functionality on object types.
  Used mostly to add our own methods to existing objects such as Array or Date

  Object.prototype is where all prototype methods live.
  You can set a new method for any object by using Object.prototype.newMethod = function, where newMethod is the name you want it to be

*/

// Implementing our own array.max() function
// This function will find the largest item out of an array of numbers
let numAry = [5, 1, 3, 7, 2, 10];

function arrayMax() {
  console.log(this); // 'this' refers to the object that called this method, which will be numAry for this example
  console.log(this[0]);
  return Math.max(...this);
}

Array.prototype.max = arrayMax; // Attaches our method to all arrays that are declared on this page

// Capitalize every word in an array
let wordAry = ['this', 'is', 'for', 'testing', 'purposes', 'only'];

Array.prototype.capitalize = function() {
  // let arr = [];
  // for (let i = 0; i < this.length; i++) {
  //   let capitalizedWord = this[i][0].toUpperCase() + this[i].slice(1);
  //   arr.push(capitalizedWord);
  // }
  //  return arr;

  return this.map(item => {
    return item[0].toUpperCase() + item.slice(1);
  });
};

// In the following example we get the same outcome in the end: but there's one major downsize
// Whenever we make a new copy of the following object it also places a new copy of the function into memory and the browser has to keep track of all of those copies.
// When we use prototypes there is only ONE copy of the function being kept track of, and all objects of the same type can access it
let sentenceAry = {
  value: ['this', 'is', 'for', 'testing', 'purposes', 'only'],
  capitalize: function() {
    let arr = [];
    for (let i = 0; i < this.value.length; i++) {
      let capitalizedWord =
        this.value[i][0].toUpperCase() + this.value[i].slice(1);
      arr.push(capitalizedWord);
    }

    return arr;
  }
};

// Add a new method to the Date object that prints out the long/full version of the month

Date.prototype.printLongDate = function() {
  // 'this' is the entire date object
  // 1st Convert to a string
  // Then call the toLocaleString method
  // With the extra option to print out only the month, in its long version
  console.log(this.toLocaleString('en-US', { month: 'long' }));
};

// We can even declare out actual instance of the Date object later, because Date is tied to all Dates within the browser
let currentTime = new Date();
console.log(currentTime.getMonth()); // Prints numeric value of month
currentTime.printLongDate(); // Prints full month

//this.toString().toLocaleString('en-US', {month: 'long'})

// Write a prototype method to split an array into 2 equally sized arrays, from the middle index
let aryToSplit = [2, 5, 1, 6, 2, 8, 3];
//                0  1  2  3  4  5  6
// 0-3 on the left, 4-6 on the right for this case
// When odd, favor the left side
// Otherwise, make them equal

// Slice method that returns a copy with no changes to the original
Array.prototype.split = function() {
  // Find the midpoint of an array
  let midPoint = Math.ceil(this.length / 2);
  // Get left half
  let leftHalf = this.slice(0, midPoint);
  // Get right half
  let rightHalf = this.slice(midPoint);
  // How to return to user:
  // Array of 2 arrays
  return [leftHalf, rightHalf];
};
// Split that modifies the original array
Array.prototype.split2 = function() {
  let midPoint = Math.ceil(this.length / 2);
  let leftHalf = this.slice(0, midPoint);
  let rightHalf = this.slice(midPoint);
  this.splice(0); // Clear out all items
  this[0] = leftHalf;
  this[1] = rightHalf;
};
