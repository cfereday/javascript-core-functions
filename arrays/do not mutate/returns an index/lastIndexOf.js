myArray = require('../../../helpers');

const executor = () => {
    console.log('my original array:', myArray);
    console.log('Description: Array.lastIndexOf(): immutable because it returns the last element of the array:  returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.' );
    console.log('Example result: giving me my last ', myArray.lastIndexOf(1));
};

executor();
