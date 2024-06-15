function convertToJSON(name, surname, eyeColor ) {

    let object = {
        name: name,
        lastName: surname,
        eyeColor: eyeColor,
    }

    console.log(JSON.stringify(object));
    
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");