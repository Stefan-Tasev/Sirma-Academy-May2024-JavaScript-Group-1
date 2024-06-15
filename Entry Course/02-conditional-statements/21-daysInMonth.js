function daysInMonth(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ) {
        console.log('31')
    }
    else if (month == 2) {
        console.log('28')
    }
    else {
        console.log('30')
    }
}

daysInMonth(1);
daysInMonth(2);
daysInMonth(3);
daysInMonth(4);
daysInMonth(5);
daysInMonth(6);
daysInMonth(7);
daysInMonth(8);
daysInMonth(9);
daysInMonth(10);
daysInMonth(11);
daysInMonth(12);