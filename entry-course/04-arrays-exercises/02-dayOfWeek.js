function dayOfWeek(number) {

    const week = ['Invalid day!', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number <= 0 || number > 7) {
        console.log(week[0]);
    } else {
        console.log(week[number]);
    }
}

dayOfWeek(0);
dayOfWeek(1);
dayOfWeek(7);
dayOfWeek(8);