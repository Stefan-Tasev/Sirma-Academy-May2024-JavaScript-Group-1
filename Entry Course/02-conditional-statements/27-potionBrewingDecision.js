function potionBrewing(first, second) {
    if (first === 'herbs' || second === 'herbs') {
        if (first === 'water' || second === 'water') {
            console.log('Health potion.');
        }
        else if (first === 'oil' || second === 'oil') {
            console.log('Stealth potion');
        }
        else {
            console.log('Minor stamina potion.');
        }
    }
    else if (first === 'berries' || second === 'berries') {
        if (first === 'sugar' || second === 'sugar') {
            console.log('Speed potion');
        }
        else {
            console.log('Minor energy potion');
        }
    }
    else {
        console.log('No potion');
    }
}
potionBrewing('herbs', 'water');
potionBrewing('herbs', 'oil');
potionBrewing('herbs', 'banana');
potionBrewing('berries', 'sugar');
potionBrewing('berries', 'banana');
potionBrewing('herbs', 'sugar');
potionBrewing('sugar', 'salt');
