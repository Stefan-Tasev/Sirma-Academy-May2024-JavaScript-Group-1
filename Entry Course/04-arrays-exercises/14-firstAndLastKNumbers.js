function firstAndLastKNumbers(step, array) {

    let startArray = array.slice(0, step);
    let endArray = array.slice((array.length - step), array.length);
    
    console.log(startArray.join(' '));
    console.log(endArray.join(' '));

    /* let startArray = [];
    let endArray = [];

    for (let i = 0; i < step; i++) {
        startArray.push(array[i]);
    }

    for (let i = array.length - step; i < array.length; i++) {
        endArray.push(array[i]);
    }

    console.log(startArray.join(' '));
    console.log(endArray.join(' ')); */

}

firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);