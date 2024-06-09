function listOfProducts(array) {

    array
        .sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
        .forEach((_, index, array) => {
            console.log(
                `${index + 1}.${array[index]}`
            )
        })
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])