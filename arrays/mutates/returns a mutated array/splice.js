myArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.splice(): mutable changes the array - changes the contents by replacing and/or adding new elements, return result is an empty array. There are 3 args: start - which index to add element to, delete count - how many items to delete, items - the elements to be added.' );
    console.log('My original array:', myArray);
    console.log('Example result: adding in the new element \'dogs\' at index 2 without deleting anything', myArray.splice(2, 0, 'dogs'));
    console.log('My mutated array:', myArray);
    console.log('Example result: adding in the new element \'bats\' at index 3 deleting the current value - i.e. replacing', myArray.splice(3, 1, 'dogs'));
    console.log('My mutated array:', myArray);
};

executor();
