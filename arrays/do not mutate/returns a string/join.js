myArray = require('../../../helpers');

const executor = () => {
    console.log('Description: Array.join(): immutable because it returns a new string: by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.');
    console.log('The original array:', myArray);
    console.log('Example result: joining all not specifying deliminator - by default will separate with a comma', myArray.join());
    console.log('Example result: specifying - as the deliminator', myArray.join('-'));
    console.log('Example result: specifying quotes space as the deliminator', myArray.join(''));
};

executor();
