function starBattlesEnigma(inputArray) {

    const letters = ['s', 't', 'a', 'r'];
    const decryptMessages = [];
    const infoStarBattles = [];

    for (let i = 0; i < inputArray.length; i++) {
        let count = 0;

        for (let j = 0; j < inputArray[i].length; j++) {

            if (letters.includes(inputArray[i][j].toLowerCase())) {
                count++;
            }
        }

        let message = '';

        for (let k = 0; k < inputArray[i].length; k++) {

            message += String.fromCharCode(inputArray[i][k].charCodeAt() - count);
        }

        decryptMessages.push(message);
    }

    let planetPattern = /@([A-z]+)/g;
    let populationPattern = /:([0-9]+)/g;
    let soldierPattern = /->([0-9]+)/g;
    let attackOrDestruction = /!([A|D])!/g;

    for (let msg of decryptMessages) {

        let planetName = '';
        let planetMatch = msg.match(planetPattern);
        if (planetMatch) {
            planetName = planetMatch[0].slice(1, planetMatch[0].length);
        }
        
        let population = 0;
        let populationMatch = msg.match(populationPattern);
        if (populationMatch) {
            population = populationMatch[0].slice(1, populationMatch[0].length);
        }
        
        let soldier = 0;
        let soldierMatch = msg.match(soldierPattern);
        if (soldierMatch) {
            soldier = soldierMatch[0].slice(1, soldierMatch[0].length);
        }
        
        let atackType = '';
        let atackTypeMatch = msg.match(attackOrDestruction);
        if (atackTypeMatch) {
            atackType = atackTypeMatch[0].slice(1, 2);
        }
        
        infoStarBattles[planetName] = {
            planetName: planetName,
            population: population,
            soldier: soldier,
            atackType: atackType,
        };
    }

    //const sortedInfoStarBatles = infoStarBattles.sort((a, b) => a.atackType.localeCompare(b.atackType));

    let attackedPlanetsCount = 0;
    let destroyedPlanetsCount = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let planet of Object.values(infoStarBattles)) {
        if (planet.atackType === 'A') {
            attackedPlanetsCount++;
            attackedPlanets.push(planet.planetName);
        } else {
            destroyedPlanetsCount++;
            destroyedPlanets.push(planet.planetName);
        }
    }

    console.log(`Attacked planets: ${attackedPlanetsCount}`);
    for (let p of attackedPlanets) {
        console.log(`-> ${p}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    for (let p of destroyedPlanets) {
        console.log(`-> ${p}`);
    }
}

starBattlesEnigma(['STCDoghudd4=53333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starBattlesEnigma(["tt(''DGsvywgerx>6444444444%H%1B9444",'GQhrr|A977777(H(TTTT','EHfsytsnhf?8555&I&2C9555SR']);