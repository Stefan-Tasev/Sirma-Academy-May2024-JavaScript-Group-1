function excelColumnNameToNumber(input) {

    let numColumn = 0;

    for (let i = 0; i < input.split('').length; i++) {
        numColumn += ((input[i].charCodeAt() - 64) * Math.pow(26, (input.length - 1 - i)));
    }
    
    console.log(numColumn);
}


excelColumnNameToNumber('A');
excelColumnNameToNumber('C');
excelColumnNameToNumber('CZ');
excelColumnNameToNumber('MM');
excelColumnNameToNumber('AB');
excelColumnNameToNumber('AAA');
excelColumnNameToNumber('ZZ');
excelColumnNameToNumber('AA');