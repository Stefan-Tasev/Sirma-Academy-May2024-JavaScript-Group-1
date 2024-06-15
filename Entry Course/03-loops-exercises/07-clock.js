function printClock() {
    
    for (let hours = 0; hours < 24; hours++) {
        
        for(let minutes = 0; minutes < 60; minutes++) {
            /* if (hours < 10) {
                hours = hours.toString().padStart(2, '0');
            }
            if (minutes < 10) {
                minutes = minutes.toString().padStart(2, '0');
            } */
            console.log(`${hours}:${minutes}`);
        }
    }
}

printClock();