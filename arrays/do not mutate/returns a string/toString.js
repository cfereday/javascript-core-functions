myArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.toString(): immutable because it returns a new string which are all the array elements as a string.' );
    console.log('My original array:', myArray);
    console.log('Example result:',  myArray.toString());
};

executor();
