function survivalWilderness(dayNight, place, tools) {
    if (dayNight === 'day') {
        if (place ==='forest') {
            if (tools === 'knife') {
                console.log('Hunt for food.')
            }
            else if (tools === 'container') {
                console.log('Collect berries.')
            }
            else {
                console.log('Explore.')
            }
        }
        else if (place ==='desert') {
            if (tools === 'hat') {
                console.log('Search for water.')
            }
            else {
                console.log('Find shade.')
            }
        }
    }
    else if (dayNight === 'night') {
        if (place ==='forest') {
            if (tools === 'firestarter') {
                console.log('Make a campfire.')
            }
            else {
                console.log('Climb a tree for safety.')
            }
        }
        else if (place ==='desert') {
            if (tools === 'blanket') {
                console.log('Sleep.')
            }
            else {
                console.log('Keep moving to stay warm.')
            }
        }
    }
}

survivalWilderness('day', 'forest', 'knife');
survivalWilderness('day', 'forest', 'container');
survivalWilderness('night', 'forest', 'firestarter');
survivalWilderness('day', 'forest', 'bag');
survivalWilderness('night', 'desert', 'blanket');
survivalWilderness('day', 'desert', 'hat');
survivalWilderness('night', 'desert', 'sword');
survivalWilderness('night', 'forest', 'hat');
