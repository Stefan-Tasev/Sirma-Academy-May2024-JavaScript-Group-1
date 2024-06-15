function movies(info) {

    let moviesApp = [];



    for (let infoLine of info) {

        if (infoLine.includes('addMovie')) {
            let movieName = infoLine.split('addMovie ')[1];

            moviesApp.push({
                name: movieName,
            })
        }
        else if (infoLine.includes('directedBy')) {
            let infoFromLine = infoLine.split(' directedBy ');

            for (let movieData of moviesApp) {
                if (Object.values(movieData).includes(infoFromLine[0])) {
                    movieData.director = infoFromLine[1]
                }
            }
        }
        else if (infoLine.includes('onDate')) {
            let infoFromLine = infoLine.split(' onDate ');

            for (let movieData of moviesApp) {
                if (Object.values(movieData).includes(infoFromLine[0])) {
                    movieData.date = infoFromLine[1]
                }
            }
        }
    }

    for (let movie of moviesApp) {
        if (Object.keys(movie).includes('director') && Object.keys(movie).includes('date')) {
            console.log(JSON.stringify(movie))
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);
movies([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
    ]
);