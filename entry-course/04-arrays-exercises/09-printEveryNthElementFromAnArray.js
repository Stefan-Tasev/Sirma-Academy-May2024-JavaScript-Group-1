function printEveryNthElementFromAnArray(array, step) {

    let currentArray = [];

    for (let i = 0; i < array.length; i+=step) {
        currentArray.push(array[i]);
    }

    console.log(currentArray.join(' '));
}

printEveryNthElementFromAnArray(['5', '15', '31', '14', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'demo', 'test'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);