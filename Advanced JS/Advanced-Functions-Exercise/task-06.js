const multiply = (a, b, c) => {
    return a * b * c;
};
console.log(multiply(2, 3, 4));


const arrowMultiply = (a) => (b) => (c) => a * b * c;
console.log(arrowMultiply(2)(3)(4)); // Output: 24


function curryMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
console.log(curryMultiply(2)(3)(4)); // Output: 24
