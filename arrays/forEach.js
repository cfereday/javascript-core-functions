myArray = require('../helpers');
let result;
let resultArray = [];
const multiplyByTwo = (currentValue) => {
    result = currentValue * 2
};
const multiplyByTwoInArray = (currentValue) => resultArray.push(currentValue * 2);

const executor = () => {
    console.log('myArray', myArray);
    console.log('Description: Array.forEach(): immutable it does not affect the original array - executes a provided function once for each array element. You need to handle what you will do with that result, i.e. store in a variable inside the test fn? or map over forEach to get an array back');
    console.log('Providing forEach with a test fn that * element by 2 - result directly of forEach is undefined', myArray.forEach(element => multiplyByTwo(element)));
    console.log('Result: storing forEach result of each one in a variable - this takes all of the results & adds them into a single var', result);
    myArray.forEach(multiplyByTwoInArray);
    console.log('Result: storing forEach result of pushing each result from test fn into array', resultArray);
};

executor();
