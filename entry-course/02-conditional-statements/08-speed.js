function speedInfo(speed) {

    let infoSpeed = '';

    if (speed <= 10) {
        infoSpeed = 'slow';
    }
    else if (speed <= 60) {
        infoSpeed = 'average';
    }
    else if (speed <= 120) {
        infoSpeed = 'fast';
    }
    else if (speed <= 160) {
        infoSpeed = 'super-fast';
    }
    else {
        infoSpeed = 'turbo-fast';
    }

    console.log(infoSpeed);
}

speedInfo(60.01);