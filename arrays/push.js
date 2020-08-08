const randomArray = Array.from('catsaregreatest');

const executor = () => {
    console.log('Description: Array.push(): mutable because it adds given elements to the end of the array & returns the new length of the array' );
    console.log('My original array:', randomArray);
    console.log('My original array length:', randomArray.length);
    console.log('Example result: new of length of my array after pushing 1 new element', randomArray.push('d'));
    console.log('My mutated array:', randomArray);
};

executor();
