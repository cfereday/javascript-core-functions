myArray = require('../helpers');

const executor = () => {
    console.log('Description: Array.concat(): The concat() method can merge 2 or more arrays.');
    console.log('An example array with the concat array passed in & merged', myArray.concat(myArray));
};

executor();
