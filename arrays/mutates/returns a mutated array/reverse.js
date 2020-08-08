const myTestArray = Array.from('dogsaregreat');
const myArrayLikeObject = {0: 1, 1: 2, 3: 4, length: 3};

const executor = () => {
    console.log('Description: Array.reverse(): mutable because it returns the array in reverse' );
    console.log('My original array:', myTestArray);
    console.log('Example result: reversing - last is now first', myTestArray.reverse());
    console.log('My original array - now mutated:', myTestArray);
    console.log('Interestingly you can also reverse an array like object- like this one:', myArrayLikeObject);
    console.log('applying Array.prototype.reverse.call(myArrayLikeObject)', Array.prototype.reverse.call(myArrayLikeObject));
};

executor();
