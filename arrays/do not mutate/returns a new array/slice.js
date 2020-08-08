myArray = require('../../../helpers');

const executor = () => {
    console.log('Description: Array.slice(): immutable - returns a new array which is a shallow copy of a portion of the array: give it start index & end index - end is not included' );
    console.log('My original array:', myArray);
    console.log('Example result: slice with 0, 4 args:', myArray.slice(0,4));
    console.log('Example result: slice with 2 arg:', myArray.slice(2));
};

executor();
