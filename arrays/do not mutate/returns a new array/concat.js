myArray = require('../../../helpers');

const executor = () => {
    console.log('Description: Array.concat(): Immutable -> returns a new array that merges 2 or more arrays.');
    console.log('The original array:', myArray);
    console.log('An example array with the concat array passed in & merged', myArray.concat(myArray));
};

executor();
