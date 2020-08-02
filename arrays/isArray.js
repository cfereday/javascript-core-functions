myArray = require('../helpers');

const executor = () => {
    console.log('Description: Array.isArray(): return boolean to say if its an array or not');
    console.log('An example array: is', Array.isArray(myArray));
    console.log('An example non array: is', Array.isArray({foo: 123}));
};

executor();
