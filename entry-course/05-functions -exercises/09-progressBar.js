function progressBar(status) {

    let findStatus = function(number) {

        /* if (number % 10 < 5) {
            number = (Math.floor(number / 10)) * 10;
        } else {
            number = (Math.ceil(number / 10)) * 10;
        } */

        let statusBar = `${number}% [${'%'.repeat(number/10)}${'.'.repeat(10 - (number/10))}]`;

        return statusBar;

    }

    let isComplete = function(number) {
        if (number !== 100) {
            return 'Loading...';
        }

        return 'Complete!';
    }

    console.log(findStatus(status));
    console.log(isComplete(status));
}

progressBar(35);
progressBar(54);
progressBar(100);