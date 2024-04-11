console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

function addItem(item) {
  basket.push(item);
  if (basket.includes(item)) {
    return true;
  }
}

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

function empty() {
  basket.splice(0, basket.length);
}

addItem('eggs');
addItem('onions');
addItem('green peppers');
addItem('tomatoes');
// addItem('deli ham');
// addItem('cheddar cheese');

listItems();
// empty();

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}
console.log(isFull());

console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
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
