function reverseAnArrayOfNumbers(count, array) {
    
    let reversedArray = array.splice(0, count).reverse().join(', ');

    console.log(reversedArray);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(5, [66, 43, 75, 89, 47]);