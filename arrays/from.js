myArray = require('../helpers');

const fromChars = Array.from('splitmeword');
const fromAnExistingArrayWhoseElementsareThenDoubled = Array.from(myArray, x => x * 2);

const executor = () => {
    console.log('Description: The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.');
    console.log('fromChars', fromChars);
    console.log('fromAnExistingArrayWhoseElementsareThenDoubled', fromAnExistingArrayWhoseElementsareThenDoubled);
};

executor();
