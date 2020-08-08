myArray = Array.from('catsaregreat');
const arrayWithADate = [new Date('21 Dec 1997 14:12:00 UTC')];

const executor = () => {
    console.log('Description: Array.toLocaleString(): immutable because it returns a new string. Basically have a date in here and if you use this fn it will turn it into a locale specific String (such as a comma “,”).' );
    console.log('My original array:', myArray);
    console.log('Example result: toLocaleString with no date - just a bunch of chars',  myArray.toLocaleString());
    console.log('Example result: toLocaleString with just a date - handy to prettify the date',  arrayWithADate.toLocaleString());
};

executor();
