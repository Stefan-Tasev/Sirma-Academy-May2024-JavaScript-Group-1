function reverseAnArrayOfStrings(array) {

    //console.log(array.reverse().join(' '));

    for (let i = 0; i < array.length / 2; i++) {
        let currentElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = currentElement;
    }

    console.log(array.join(' '))

}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);