myArray = require('../helpers');

const iterator = myArray.entries();

const isEven = (currentValue) => currentValue % 2 === 0;
const executor = () => {
    console.log('Description: Array.every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.');
    console.log('', myArray.every(isEven));
    console.log(iterator.next().value);
    console.log(iterator.next());
};

executor();
