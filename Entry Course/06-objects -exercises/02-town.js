function town(info) {

    for( let key of Object.keys(info)) {
        console.log(`${key} -> ${info[key]}`);
    }
}

town({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
    }
)