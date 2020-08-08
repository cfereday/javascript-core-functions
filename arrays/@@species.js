const randomArray = Array.from('catsaregreat');

const executor = () => {
    console.log('Description: Array[@@species]: immutable because it is creating arrays - accessor property returns the Array constructor.' );
    console.log('The species property returns the default constructor function, which is the Array constructor for Array objects:', Array[Symbol.species]);
};

executor();
