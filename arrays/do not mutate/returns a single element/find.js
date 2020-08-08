myArray = require('../../../helpers');
const isEven = (currentValue) => currentValue % 2 === 0;

const executor = () => {
    console.log('Description: Array.find(): immutable - returns the value of the first element in a new array from the original array that returns true against the function its given.');
    console.log('The original array:', myArray);
    console.log('Finds the first even number from given array & returns just that item', myArray.find(number => isEven(number)));
};

executor();
