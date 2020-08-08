const randomArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.shift(): mutable because it removes the first element from array & return value is that first element it has removed' );
    console.log('My original array:', randomArray);
    console.log('Example result: shifted first element', randomArray.shift());
    console.log('My mutated array:', randomArray);
};

executor();
