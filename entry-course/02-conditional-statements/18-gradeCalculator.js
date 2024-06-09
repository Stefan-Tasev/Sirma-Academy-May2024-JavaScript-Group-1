function gradeCalculator(percentageCsore) {

    let result = '';
    if (percentageCsore < 60) {
        result = 'F';
    }
    else if (percentageCsore < 70) {
        result = 'D';
    }
    else if (percentageCsore < 80) {
        result = 'C';
    }
    else if (percentageCsore < 90) {
        result = 'B';
    }
    else {
        result = 'A';
    }
    console.log(result);
}

gradeCalculator(90);
gradeCalculator(89);
gradeCalculator(79);
gradeCalculator(69);
gradeCalculator(59);