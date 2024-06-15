function dayOfWeek(number) {

    let currentDay = '';

    switch(number) {
        case 1: currentDay = 'Monday';
            break;
        case 2: currentDay = 'Tuesday';
            break;
        case 3: currentDay = 'Wednesday';
            break;
        case 4: currentDay = 'Thursday';
            break;
        case 5: currentDay = 'Friday';
            break;
        case 6: currentDay = 'Saturday';
            break;
        case 7: currentDay = 'Sunday';
            break;
        default:
             currentDay = 'Error';
    }

    console.log(currentDay);
}

dayOfWeek(10);