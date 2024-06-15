function longestSequenceOfIdenticalElements(...numbers) {

    let longSequence = [];
    let currentSequence = [numbers[0],];

    let currentElement = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        
        if (numbers[i] === currentElement) {
            currentSequence.push(numbers[i]);
        } else {
            currentElement = numbers[i];

            if (currentSequence.length >= longSequence.length) {
                longSequence = currentSequence.slice();
            }

            currentSequence = [];
            currentSequence.push(numbers[i]);
        }
    }

    if (currentSequence.length >= longSequence.length) {
        longSequence = currentSequence.slice();
    }

    console.log(longSequence.join(' '));
}

longestSequenceOfIdenticalElements(2, 2, 2, 3, 4, 4, 2, 2, 2, 1);
longestSequenceOfIdenticalElements(1, 1, 1, 2, 3, 1, 3, 3, 1, 1);
longestSequenceOfIdenticalElements(1, 1, 2, 3, 4, 5, 6, 2, 2);
longestSequenceOfIdenticalElements(4, 4, 4, 4);
longestSequenceOfIdenticalElements(0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5);