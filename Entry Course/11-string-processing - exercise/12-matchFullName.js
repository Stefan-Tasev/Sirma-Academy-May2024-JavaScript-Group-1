function matchFullName(input) {

    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+)/g;
    let resultRegex = input.matchAll(pattern);

    let names = [];

    for (let name of resultRegex) {
        
        names.push(name[0]);
    }

    console.log(names.join(', '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");