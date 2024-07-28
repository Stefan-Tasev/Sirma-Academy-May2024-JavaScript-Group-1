const double = (num) => num * 2;
const square = (num) => num * num;

function compose(num) {

    return function(num) {

        return square(double(num));
    }
}


const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3)); // Output: 36

const arrowCompose = (double, square) => (number) => square(double(number));
const arrowDoubleThenSquare = arrowCompose(double, square);
console.log(arrowDoubleThenSquare(3));