myArray = require('../../../helpers');

const executor = () => {
    console.log('Description: Array.copyWithin(): mutates/ non-inmutable -> makes shallow copies part of an array to another location in the same array and returns it without modifying its length.');
    console.log('The original array:', myArray);
    console.log('Copy to index 0 all elements from index 3 to the end ', myArray.copyWithin(0, 3));
    console.log('My original after - is it the same? ', myArray);
};

executor();
