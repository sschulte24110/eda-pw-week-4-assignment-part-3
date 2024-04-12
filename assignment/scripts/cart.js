console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

function addItem(item) {
  if (basket.length <= 4) {
    basket.push(item);
    return (`${item} has been added.`, true);
  } else if (isFull() === true) {
    return ('Cart is full.', false)
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
    return false;
  } 
    return true;
  }

function removeItem(item) {
  let elementPosition = basket.indexOf(item);
  if (elementPosition !== -1) {
    basket.splice(elementPosition, 1);
    return item;
  } else if(elementPosition === -1) {
    return null;
  }
}


addItem('eggs');
addItem('onions');
// addItem('spinach');
// addItem('tomatoes');
addItem('cheddar cheese');
console.log(addItem('ham'));
// console.log(removeItem('spinach'));

// empty();
listItems();
console.log(isFull());
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
