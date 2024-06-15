function ticketsInfo(inputArray, sortingCriterion) {

    const ticketRegister = new Map();

    let number = 1;

    for (let ticket of inputArray) {
        let destination = ticket.split('|')[0];
        let price = parseFloat(ticket.split('|')[1]);
        let status = ticket.split('|')[2];

        ticketRegister.set(number, {
            destination: destination,
            price: price,
            status: status,
        })

        number++
    }

    /* for (let line of ticketRegister) {
        for (let ticketInfo of Object.keys(line)) {
            console.log(line[ticketInfo]);
        }
    } */

    let sortedMap;

    if (sortingCriterion === 'destination' || sortingCriterion === 'status') {
        sortedMap = [...ticketRegister.values()].sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion], 'en', { sensitivity: 'base' }));
    }
    else if (sortingCriterion === 'price') {
        sortedMap = [...ticketRegister.values()].sort((a, b) => a[sortingCriterion] - b[sortingCriterion]);
    }
    
    return sortedMap;
}

ticketsInfo(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price');

ticketsInfo(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

ticketsInfo(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');