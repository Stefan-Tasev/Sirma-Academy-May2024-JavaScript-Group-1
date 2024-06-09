function lastKNumbersSequence(length, count) {

    let array = [1];

    for (let i = 1; i < length; i++) {

        let nextElement = array.slice(-count).reduce((acc, el) => acc + el, 0);
        
        array.push(nextElement);
    }

    console.log(array.join(' '));
}


lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);