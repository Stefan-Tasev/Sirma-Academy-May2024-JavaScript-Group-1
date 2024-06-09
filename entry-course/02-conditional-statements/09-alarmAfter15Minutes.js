function alarmAfter15Minutes(startHours, startMinutes) {

    let hours = startHours;
    let minutes = startMinutes;

    if ((minutes + 15) > 59) {
        minutes -= 45;
        hours += 1;

        if (hours > 23) {
            hours = 0;
        }
    }
    else {
        minutes += 15;
    }

    let hoursToString = hours.toString();
    let minutesToString = '';
    /* let hoursToString = '';
    if (hours < 10) {
        hoursToString = hours.toString().padStart(2, '0');
    }
    else {
        hoursToString = hours.toString();
    } */
    if (minutes < 10) {
        minutesToString = minutes.toString().padStart(2, '0');
    }
    else {
        minutesToString = minutes.toString();
    }

    console.log(hoursToString + ':' + minutesToString)
    
}

alarmAfter15Minutes(23, 48);