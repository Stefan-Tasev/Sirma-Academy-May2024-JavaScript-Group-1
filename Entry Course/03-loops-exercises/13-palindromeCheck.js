function palindromeCheck(word) {

    //let reverseWord = word.split('').reverse().join('');
    //return console.log(word === reverseWord);

    let reverseWord = '';

    for (let i = (word.length - 1); i >= 0; i--) {

        reverseWord += word[i];
    }

    if (word === reverseWord) {

        console.log(true);
    }
    else {
        
        console.log(false);
    }
}

palindromeCheck('radar');
palindromeCheck('racecar');
palindromeCheck('java');
palindromeCheck('hello');
palindromeCheck('madam');
