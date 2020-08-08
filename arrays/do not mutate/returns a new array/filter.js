myArray = require('../../../helpers');
const isEven = (currentValue) => currentValue % 2 === 0;
const executor = () => {
    console.log('Description: Array.filter(): immutable - creates a new array with all the elements which return true against the function');
    console.log('The original array:', myArray);
    console.log('Filter me out only the even numbers from my array', myArray.filter(number => isEven(number)));
};

executor();
