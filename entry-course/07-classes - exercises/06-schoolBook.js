function schoolBook(input) {

    const schollRegister = new Map();

    for (let i = 1; i <= 12; i++) {
        schollRegister.set(i, {
            students: [],
            grades: [],
        });
    }

    for (let studentInfo of input) {
        let studentName = studentInfo.split(', ')[0].split(': ')[1];
        let grade = Number(studentInfo.split(', ')[1].split(': ')[1]);
        let score = parseFloat(studentInfo.split(', ')[2].split(': ')[1]);

        if (score >= 3) {
            schollRegister.get(grade + 1).students.push(studentName);
            schollRegister.get(grade + 1).grades.push(score);
        }
        
    }


    for (let key of schollRegister.entries()) {

        let studentsArray = (Object.values(key[1])[0]);
        let gradesArray = (Object.values(key[1])[1]);

        if (studentsArray.length > 0) {
            let averageGrade = gradesArray.reduce((acc, el) => acc + el, 0) / gradesArray.length;

            console.log(`${key[0]} Grade`);
            console.log(`List of students: ${studentsArray.join(', ')}`);
            console.log(`Average annual score from last year: ${averageGrade.toFixed(2)}`);
            console.log('===');
        }
    }
}

schoolBook([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]);

schoolBook([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]);