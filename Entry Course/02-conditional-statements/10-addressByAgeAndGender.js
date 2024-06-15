function genderInfo(age, gender) {

    if (age < 16) {
        if (gender === 'f') {
            console.log('Miss')
        }
        /* else if (gender === 'm') */
        else {
            console.log('Master')
        }
    }
    else {
        if (gender === 'f') {
            console.log('Ms.')
        }
        /* else if (gender === 'm') */ 
        else {
            console.log('Mr.')
        }
    }
}

genderInfo(17, 'm')