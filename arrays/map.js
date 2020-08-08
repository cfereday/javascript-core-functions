myArray = require('../helpers');

const multiplyByTwo = (currentValue) => {
    return currentValue * 2
};

const executor = () => {
    console.log('Description: Array.map(): immutable because it creates a new array: populated with the results of calling the test fn on each element of the array' );
    console.log('My original array:', myArray);
    console.log('Example result: test fn takes each num & multiplies by 2 & maps each result into a new array', myArray.map(num => multiplyByTwo(num)));
};

executor();
