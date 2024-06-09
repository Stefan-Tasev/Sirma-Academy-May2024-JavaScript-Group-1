function adventureGame(leftHand, rightHand) {
    if (leftHand === 'sword' || rightHand === 'sword') {
        if (rightHand === 'shield' || leftHand === 'shield') {
            console.log('Take the path to the castle.');
        }
        else {
            console.log('Take the path to the forest.');
        }
    }
    else if (leftHand === 'map' || rightHand === 'map') {
        if (leftHand === 'coins' || rightHand === 'coins') {
            console.log('Go to the town.');
        }
        else {
            console.log('Camp at the current spot and prepare for the next day.');
        }
    }
    else {
        console.log('Wander aimlessly.');
    }
}

adventureGame('sword', 'shield');
adventureGame('map', 'coins');
adventureGame('torch', 'flower');
adventureGame('sword', 'pouch');
adventureGame('map', 'compass');