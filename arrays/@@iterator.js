const randomArray = Array.from('catsaregreat');
let iteratorResult;

const executor = () => {
    console.log('Description: Array.values(): immutable because it returns a new Array Iterator object containing the values for each index in the array' );
    console.log('My original array:', randomArray);
    console.log('Results of applying Symbol.iterator:', iteratorResult = randomArray[Symbol.iterator]);
};

executor();
