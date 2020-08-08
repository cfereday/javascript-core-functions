const randomArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array.pop(): mutable because it removes the last element from array & return value is that last element' );
    console.log('My original array:', randomArray);
    console.log('Example result: popped last element', randomArray.pop());
    console.log('My mutated array:', randomArray);
};

executor();
