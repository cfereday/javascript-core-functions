myArray = require('../../../../helpers');

const isEven = (currentValue) => currentValue % 2 === 0;
const executor = () => {
    console.log('Description: Array.every(): immutable because it returns a boolean. Tests whether all elements in the array meet the criteria of the test fn.');
    console.log('The original array:', myArray);
    console.log('Are all elements in the array even?', myArray.every(isEven));
};

executor();
