// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
myArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.unshift(): mutable changes array - adds 1 or more element to array & returns new length of array - returns the new length of mutated array. Pass in as args whatever you want added to start of array');
    console.log('My original array:', myArray);
    console.log('Example result: adding in 1, 2:',  myArray.unshift(1, 2));
    console.log('My mutated array:', myArray);
};

executor();
