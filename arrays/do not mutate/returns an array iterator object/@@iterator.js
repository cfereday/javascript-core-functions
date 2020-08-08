const randomArray = Array.from('catsaregreat');
let iteratorResult;

const executor = () => {
    console.log('Description: @@iterator: immutable because it returns an array iterator - part of the iterable protocol which defines how to synchronously iterate over a sequence of values.   The initial value of the @@iterator property is the same function object as the initial value of the values() property.' );
    console.log('My original array:', randomArray);
    console.log('Results of applying Symbol.iterator:', iteratorResult = randomArray[Symbol.iterator]);
};

executor();
