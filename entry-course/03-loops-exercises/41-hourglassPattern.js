function hourglassPattern(num) {

    let lineTopBottom = '#'.repeat(num + 2);
    let range = Math.ceil(num /2);
    let sign = '#'

    for (let i = 0; i <= range; i++) {
        
        let line = '';
        let spaces = ' '.repeat(i);
        let innerSpaces = lineTopBottom.length - 2 * i - 2;

        if (i === 0) {
            console.log(lineTopBottom);
        } 
        else if (innerSpaces < 0) {
            console.log(spaces + sign + spaces);
        }
        else {
            console.log(spaces + sign + ' '.repeat(innerSpaces) + sign + spaces);
        }
    }

    for (let j = range - 1; j >= 0; j--) {
        
        let line = '';
        let spaces = ' '.repeat(j);
        let innerSpaces = lineTopBottom.length - 2 * j - 2;

        if (j === 0) {
            console.log(lineTopBottom);
        } 
        else if (innerSpaces < 0) {
            console.log(spaces + sign + spaces);
        }
        else {
            console.log(spaces + sign + ' '.repeat(innerSpaces) + sign + spaces);
        }
    }
    
}

hourglassPattern(5);
hourglassPattern(8);
hourglassPattern(2);