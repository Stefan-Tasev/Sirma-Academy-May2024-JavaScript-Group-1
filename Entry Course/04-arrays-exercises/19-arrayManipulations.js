function arrayManipulations(info) {

    let array = info[0].split(' ').map(el => Number(el));

    let findElement = function(el, array) {
        return array.find(element => element === el)
    }

    let findIndex = function(el, array) {
        return array.indexOf(el);
    }

    for (let commandInfo of info.slice(1)) {

        let command = commandInfo.split(' ')[0];
        let firstNumber = Number(commandInfo.split(' ')[1]);
        
        if (command === 'Add') {
            array.push(firstNumber);
        }
        else if (command === 'Remove') {
            if(findElement) {
                array.splice(findIndex(firstNumber, array), 1);
            }
        }
        else if (command === 'RemoveAt') {
            array.splice(firstNumber, 1);
        }
        else if (command === 'Insert') {
            let insertNumber = Number(commandInfo.split(' ')[2]);
            array.splice(insertNumber, 0, firstNumber);
        }
    }

    console.log(array);
}

arrayManipulations(["4 19 2 53 6 43",
"Add 3",
"Remove 2",
"RemoveAt 1",
"Insert 8 3"]
)