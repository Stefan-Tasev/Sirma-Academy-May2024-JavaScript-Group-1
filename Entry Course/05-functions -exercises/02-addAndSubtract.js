function addAndSubtract(first, second, third) {

    let add = function(a, b) {
        return a + b;
    }
    let subtract = function(a, b) {
        return a - b;
    }

    let result = subtract(add(first, second), third);

    console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);