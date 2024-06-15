function convertToObject(someJSON) {

    let object = JSON.parse(someJSON);

    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertToObject('{"firstName": "Ivan", "lastName": "Ivanov"}');