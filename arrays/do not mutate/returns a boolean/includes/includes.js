myArray = require('../../../../helpers');

const executor = () => {
    console.log('Description: Array.includes(): immutable because it returns a boolean to say if the array includes whatever element you might pass it');
    console.log('The original array:', myArray);
    console.log('Example result: does my array include integer 1?', myArray.includes(1));
    console.log('Example result: does my array include string char?:', myArray.includes('char'));
};

executor();
