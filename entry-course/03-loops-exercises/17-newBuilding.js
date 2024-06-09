function newBuilding(floor, room) {

    for (let i = floor; i > 0; i--) {

        let currentFloor = '';
        let char = 'A';

        for (let j = 0; j < room; j++) {
            
            if (i === floor) {
                char = 'L'
            }
            else if (i % 2 === 0){
                char = 'O'
            }

            currentFloor += char + i + j + ' ';
        }

        console.log(currentFloor);
    }
}

newBuilding(6,4);
newBuilding(3,3);
newBuilding(1,4);
newBuilding(5,4);
newBuilding(1,1);
newBuilding(2,2);