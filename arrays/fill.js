const myArray1 = [1, 4, 7, 8, 3, 2, 9, 10, 67, 35, 90, 23, 11, 18, 76];
const myArray2 = [1, 4, 7, 8, 3, 2, 9, 10, 67, 35, 90, 23, 11, 18, 76];

const executor = () => {
    console.log('Description: Array.fill(): mutable returns a modified array- changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).');
    console.log('Fill my array with value 5 from start index of 3', myArray1.fill(5, 3));
    console.log('Fill my array with value 5 from start index of 0 to index of 1', myArray2.fill(5, 0, 1));
};

executor();
