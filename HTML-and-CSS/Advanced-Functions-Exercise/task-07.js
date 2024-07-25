const add = function(a, b, c, d) {
    return a + b + c + d;
};
console.log(add(1, 2, 3, 5));


const addFive = 5;
const partialSum = (a, b, c) => add(a, b, c, addFive);
console.log(partialSum(1, 2, 3)); // Output: 11
