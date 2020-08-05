myArray = require('../helpers');

let result;
const executor = () => {
    console.log('myArray length', myArray.length);
    console.log('Description: Array.keys(): immutable because it returns an Array Iterator object: object that contains the number of the index for all elements in the array.');
    console.log('Example result: just calling keys() this is the iterator object returned', result = myArray.keys());
    for (const key of result) {
        console.log('Example result: running a for loop over all the contents of the iterator we got from calling keys() on the array', typeof key);
    }
};

executor();
