function multiply(a, b) {
    return a * b;
}

const multiplyByFive = multiply.bind(this, 5);

console.log(multiplyByFive(3)); // Output: 15

