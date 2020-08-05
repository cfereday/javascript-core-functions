myArray = require('../helpers');

const iterator = myArray.entries();

const executor = () => {
    console.log('start',myArray);
    console.log('Description: Array.entries(): immutable because it returns a new Array Iterator object that contains the key/value pairs for each index in the array.');
    console.log('here is what the entries function looks like', myArray.entries());
    console.log('using the iterator next value',iterator.next().value);
    console.log('end',myArray)
};

executor();