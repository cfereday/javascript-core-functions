const randomArray = Array.from('catsaregreat');
let iteratorResult;

const executor = () => {
    console.log('Description: Array.values(): immutable because it returns a new Array Iterator object containing the values for each index in the array' );
    console.log('My original array:', randomArray);
    console.log('Example result: shifted first element', iteratorResult = randomArray.values());
    console.log('Looping over all of the values of the iterator:');
    for (const value of iteratorResult) {
        console.log(value);
    }
};

executor();
