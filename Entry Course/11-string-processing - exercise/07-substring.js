function substring(word, someText) {

    let wordToLowerCase = word.toLowerCase();
    let someTextToLowerCase = someText.toLowerCase();
    

    if (someTextToLowerCase.includes(wordToLowerCase)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

substring('javascript', 'JavaScript is the best programming language');
substring('python', 'JavaScript is the best programming language');