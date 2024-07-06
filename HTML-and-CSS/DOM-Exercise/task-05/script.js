function insertRow() {

    let currentNumber = document.querySelector('table tbody').children.length;
    const tableElement = document.querySelector('table tbody');

    const tableRowElement = document.createElement('tr');

    const tableDataElementFirstCell = document.createElement('td');
    tableDataElementFirstCell.textContent = `Row${currentNumber + 1} cell1`
    const tableDataElementSecondCell = document.createElement('td');
    tableDataElementSecondCell.textContent = `Row${currentNumber + 1} cell2`

    tableRowElement.appendChild(tableDataElementFirstCell);
    tableRowElement.appendChild(tableDataElementSecondCell);

    tableElement.appendChild(tableRowElement);

}