function createTable() {

    const rowNumber = Number(document.querySelector('input[name=row]').value);
    const columnNumber = Number(document.querySelector('input[name=column]').value);

    const table = document.getElementById('myTable');

    const dFrag = document.createDocumentFragment();

    const tbody = document.createElement('tbody');

    for (let i = 1; i <= rowNumber; i++) {

        const rowElement = document.createElement('tr');

        for (let j = 1; j <= columnNumber; j++) {

            const tdElement = document.createElement('td');
            tdElement.textContent = `Row-${i} Column-${j}`;

            rowElement.appendChild(tdElement);
        }

        tbody.appendChild(rowElement);
    }

    dFrag.appendChild(tbody);
    
    table.appendChild(dFrag);
    document.querySelector('.info').style.display = 'none';
    
}