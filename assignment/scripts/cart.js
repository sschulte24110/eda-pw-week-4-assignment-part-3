console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

addItem('eggs');
addItem('onions');
addItem('green peppers');
addItem('tomatoes');
// console.log(addItem('ham'));
// addItem('cheddar cheese');


function addItem(item) {
  basket.push(item);
  if (basket.length <= 4) {
    return true;
  } else if (isFull() === true) {
    return false;
  }
}

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}
listItems();

function empty() {
  basket.splice(0, basket.length);
}

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } 
    return true;
  }
console.log(isFull());

// Need to figure out test issue on this
function removeItem(item) {
  let elementPosition = basket.indexOf(item);
  if (elementPosition !== -1) {
     let item = basket.splice(elementPosition, 1);
     return item;
  } 
}
removeItem('spinach');

console.log(`Basket is ${basket}`);
console.log(basket.length);
console.log(`Basket is now ${basket}`);









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
