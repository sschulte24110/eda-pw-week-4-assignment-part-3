console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

function addItem(item) {
  if (basket.length < maxItems) {
    basket.push(item);
    console.log('Added', item);
    return true;
  } else if (isFull() === true) {
    console.log('Cannot add item. Cart is full.');
    return false;
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

function isFull() {
  if (basket.length < maxItems) {
    console.log('There is room for more items.');
    return false;
  } else {
    console.log('The cart is full.');
    return true;
    }
  }

function removeItem(item) {
  let elementPosition = basket.indexOf(item);
  if (elementPosition !== -1) {
    basket.splice(elementPosition, 1);
    console.log(`Removed ${item}`);
    return item;
  } else if(elementPosition === -1) {
    return null;
  }
}

addItem('eggs');
addItem('onions');
addItem('spinach');
removeItem('spinach');
removeItem('onions')
addItem('tomatoes');
addItem('cheddar cheese');
addItem('ham');
addItem('milk');

listItems();
console.log(isFull());
console.log(`Basket is ${basket}`);
console.log(basket.length);
empty(basket);
console.log(basket.length);
console.log(basket);









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
