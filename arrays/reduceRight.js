myArray = require('../helpers');

const reducerMultiplyByTwo = (accumulator, currentValue) => {
    return accumulator + (currentValue * 2);
};

const executor = () => {
    console.log('Description: Array.reduceRight(): immutable because it returns the final single accumulated output value of applying the provided test fn on each element of the array from right to left (or from end to start)' );
    console.log('My original array:', myArray);
    console.log('Example result: multiplying each element by 2 and each result to the accumulator starting at the end ', myArray.reduceRight(reducerMultiplyByTwo));
};

executor();
