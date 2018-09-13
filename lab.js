/*
  Sorting examples
*/
// Generate random number array, with each item between 1 and 100
let numAry = [];
for (let i = 0; i < 20; i++) {
  numAry.push(Math.ceil(Math.random() * 100));
}

// Sort in ascending order
// We only want to swap if the left value is greater than the right value
numAry.sort((leftValue, rightValue) => {
  if (leftValue > rightValue) {
    return 1;
  } else {
    return -1;
  }
});

numAry.sort((a, b) => a - b);

// When the google v8 engine uses sort on arrays with 10 or less items, it uses insertion sort with a different check on the callback
// When you have more than 10 items, it uses a different sort that expects a different value on the callback

// Sort in descending order
// If the left value is larger than the right value, we DO NOT want to swap them, so return -1
numAry.sort((leftValue, rightValue) => (leftValue > rightValue ? -1 : 1));

// Sort by key, ascending on price
let objAry = [
  { name: 'TV', price: 250 },
  { name: 'Shoes', price: 70 },
  { name: 'Shirt', price: 23 },
  { name: 'House', price: 1300000 },
  { name: 'Yogurt', price: 2 },
  { name: 'Milkshake', price: 2 },
  { name: 'Ticket', price: 23 },
  { name: 'Jacket', price: 70 },
  { name: 'Bike', price: 250 }
];

// Compare first item to the second item, based on price
// objAry[0].price < objAry[1].price ? -1 : 1
// Generic version:
// obj1.price < obj2.price ? -1 : 1;

objAry.sort((obj1, obj2) => (obj1.price < obj2.price ? -1 : 1));

// Compare based on price first, then on name
objAry.sort((obj1, obj2) => {
  if (obj1.price === obj2.price) {
    // If the price is the same, sort on name instead
    return obj1.name < obj2.name ? -1 : 1;
  } else {
    // If the price is different, sort on price
    return obj1.price < obj2.price ? -1 : 1;
  }
});

// Creating a function that will sort an object array by key
function sortByKey(key) {
  this.sort((obj1, obj2) => (obj1[key] < obj2[key] ? -1 : 1));
}

Array.prototype.sortByKey = sortByKey;

objAry.sortByKey('price');
