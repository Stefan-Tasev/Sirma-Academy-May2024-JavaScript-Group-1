function addAndRemoveElementsFromArray(array) {

    let currentArray = [];

    let initial = 1;

    for (let command of array) {
        if (command === 'add') {
            currentArray.push(initial);
        }
        else if (command === 'remove'){
            currentArray.pop();
        }

        initial++;
    }

    if (currentArray.length) {
        console.log(currentArray.join(' '));
    } else {
        console.log('Empty');
    }
    
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);
