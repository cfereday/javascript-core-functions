myArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.sort(): mutable changes the array - sorts the elements of an array in place & returns the sorted array. Default sort order is ascending: this is made by converting the elements into strings, then comparing their sequences of UTF-16 code units values.' );
    console.log('My original array:', myArray);
    console.log('Example result: is there an element that is even in the array?:', myArray.sort());
    console.log('My mutated array:', myArray);
};

executor();
