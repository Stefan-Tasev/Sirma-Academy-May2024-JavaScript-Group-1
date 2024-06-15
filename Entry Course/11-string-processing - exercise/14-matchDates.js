function matchDates(input) {

    let pattern = /\b(\d{2})([-.\/])([A-Z][a-z]{2})(\2)(\d{4})\b/g;

    let matches = input[0].matchAll(pattern);

    for (let date of matches) {
        console.log(`Day: ${date[1]}, Month: ${date[3]}, Year: ${date[5]}`)
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016']);