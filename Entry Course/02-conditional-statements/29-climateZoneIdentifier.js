function climateZone(latitude, northSouth) {
    if (latitude === 0) {
        console.log('Equator');
    }
    else if (Math.abs(latitude) <= 23.5) {
        if (northSouth === 'N') {
            console.log(`${northSouth} Tropic Zone`);
        }
        else if (northSouth === 'S') {
            console.log(`${northSouth} Tropic Zone`);
        }
    }
    else if (Math.abs(latitude) <= 66.5) {
        if (northSouth === 'N') {
            console.log(`${northSouth} Temperate Zone`);
        }
        else if (northSouth === 'S') {
            console.log(`${northSouth} Temperate Zone`);
        }
    }
    else if (Math.abs(latitude) > 66.5 &&  Math.abs(latitude) < 90) {
        if (northSouth === 'N') {
            console.log(`${northSouth} Arctic Zone`);
        }
        else if (northSouth === 'S') {
            console.log(`${northSouth} Arctic Zone`);
        }
    }
}

climateZone(70, 'N');
climateZone(45, 'S');
climateZone(10, 'N');
climateZone(0, 'N');
climateZone(-85, 'S');