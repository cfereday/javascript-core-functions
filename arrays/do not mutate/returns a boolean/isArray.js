myArray = require('../../../helpers');

const executor = () => {
    console.log('Description: Array.isArray(): immutable because it returns a boolean to say if its an array or not');
    console.log('The original array:', myArray);
    console.log('An example array: is', Array.isArray(myArray));
    console.log('An example non array: is', Array.isArray({foo: 123}));
};

executor();
