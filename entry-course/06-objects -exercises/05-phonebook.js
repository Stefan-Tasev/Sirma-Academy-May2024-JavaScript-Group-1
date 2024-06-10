function phonebook(info) {

    let object = {};

    for (let infoPerson of info) {
        let name = infoPerson.split(' ')[0];
        let phoneNUmber = infoPerson.split(' ').slice(1, infoPerson.length).join(' ');

        object[name] = phoneNUmber;
    }

    for (let key of Object.keys(object)) {
        console.log(`${key} -> ${object[key]}`);
    }
}

phonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"] );
phonebook(["Maria 123", "Samantha 456", "Nicole 789"]);