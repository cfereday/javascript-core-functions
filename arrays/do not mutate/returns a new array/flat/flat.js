myArray = require('../../../../helpers');
const isEven = (currentValue) => currentValue % 2 === 0;

const myNestedArray = [myArray, [myArray]];

const executor = () => {
    console.log('Description: Array.flat(): immutable - returns a new array with any nested arrays concatenated into it for a single level array. It also removes empty slots in arrays');
    console.log('The original array:', myNestedArray);
    console.log('My flattened array - only flattens down one level', myNestedArray.flat());
};

executor();
