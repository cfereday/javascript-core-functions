myArray = require('../helpers');
const isEven = (currentValue) => currentValue % 2 === 0;

const executor = () => {
    console.log('Description: Array.flatMap(): immutable - returns a new array with the results of applying map for a test function & then flattening  the result in a new result. Exactly the same as map() chained after with a flat() of depth 1 - but bit more efficient');
    console.log('The original array:', myArray);
    console.log('My flattened array - only flattens down one level', myArray.flatMap(isEven));
};

executor();
