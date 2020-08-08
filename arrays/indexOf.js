myArray = require('../helpers');

const executor = () => {
    console.log('Description: Array.indexOf(): immutable because it returns an index number: method returns the first index at which a given element can be found in the array, or -1 if it is not present.');
    console.log('The original array:', myArray);
    console.log('Example result: the index of the number 1 in my array', myArray.indexOf(1));
};

executor();
