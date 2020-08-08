myArray = require('../helpers');
let myNestedArray = [[1,2], [3, 4], [5, 6]];

const reducerMultiplyByTwo = (accumulator, currentValue) => {
    return accumulator + (currentValue * 2);
};

const reducerConcatonator = (accumulator, currentValue) => {
    return accumulator.concat(currentValue);
};

const executor = () => {
    console.log('Description: Array.reduce(): immutable because it returns the final single accumulated output value of applying the provided test fn on each element of the array' );
    console.log('My original array:', myArray);
    console.log('Example result: multiplying each element by 2 and each result to the accumulator ', myArray.reduce(reducerMultiplyByTwo));
    console.log('initialValue: a; value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.');
    console.log('Example result: using same array - multiplying each element by 2 and each result to the accumulator with an initialValue of 1', myArray.reduce(reducerMultiplyByTwo, 1));
    console.log('My original nested array', myNestedArray);
    console.log('Example result: using same array - flattening an array of arrays', myNestedArray.reduce(reducerConcatonator));
};

executor();
