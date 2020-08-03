const executor = () => {
    console.log('Description: Array.of(): immutable because creating array for first time - you give it things like numbers & it makes an array out of them');
    console.log('An example array: is', Array.of(1));
    console.log('An example non array: is', Array.of(4,7,3));
};

executor();
