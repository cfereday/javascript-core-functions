myArray = require('../../../helpers');

const fromChars = Array.from('splitmeword');
const fromAnExistingArrayWhoseElementsareThenDoubled = Array.from(myArray, x => x * 2);

const executor = () => {
    console.log('Description: Array.from(): immutable - makes a new array from sources you give it: i.e. a string of chars or . The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.');
    console.log('Creating the array from a string- splitmeword');
    console.log('fromChars', fromChars);
    console.log('The original array:', myArray);
    console.log('fromAnExistingArrayWhoseElementsareThenDoubled', fromAnExistingArrayWhoseElementsareThenDoubled);
};

executor();
