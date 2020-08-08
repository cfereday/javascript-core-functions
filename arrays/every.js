myArray = require('../helpers');

const iterator = myArray.entries();

const isEven = (currentValue) => currentValue % 2 === 0;
const executor = () => {
    console.log('Description: Array.every(): immutable because it returns a boolean. Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.');
    console.log('The original array:', myArray);
    console.log('Is element in array even?', myArray.every(isEven));
};

executor();
