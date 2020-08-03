myArray = require('../helpers');
const isEven = (currentValue) => currentValue % 2 === 0;

const executor = () => {
    console.log('Description: Array.findIndex(): immutable - returns an integer - the index of the first element from the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.');
    console.log('Returns the first index of the first element that is even - other returns -1 if it finds no even numbers', myArray.findIndex(number => isEven(number)));
};

executor();
