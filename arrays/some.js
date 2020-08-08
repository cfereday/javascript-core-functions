myArray = require('../helpers');

const isEven = (element) => element % 2 === 0;

const executor = () => {
    console.log('Description: Array.some(): immutable as returns a boolean value - tests whether at least one element in the array returns true for the test fn' );
    console.log('My original array:', myArray);
    console.log('Example result: is there an element that is even in the array?:', myArray.some(isEven));
};

executor();
