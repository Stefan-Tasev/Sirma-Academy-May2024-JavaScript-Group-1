function charactersInRange(char1, char2) {

    let fromCharCode = function(symbol) {
        return symbol.charCodeAt();
    }

    let toCharCode = function(number) {
        return String.fromCharCode(number);
    }

    let result = [];

    let first = fromCharCode(char1);
    let second = fromCharCode(char2);

    if (first > second) {
        let current = first;
        first = second;
        second = current;
    }

    for (let i = first + 1; i < second; i++) {
        result.push(toCharCode(i));
    }

    console.log(result.join(' '));
} 

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');