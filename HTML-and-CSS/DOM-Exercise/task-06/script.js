function changeContent() {

    function changeContentParams(row, column, text) {

        const elements = document.querySelectorAll('table tbody tr');

        for (let i = 1; i <= elements.length; i++) {

            if (i = row) {

                let tdElements = elements[row - 1].querySelectorAll('td');

                for (let j = 1; j <= tdElements.length; j++) {

                    if (j = column) {

                        tdElements[column - 1].textContent = text;

                        return;
                    }
                }
            }
        }
    }

    changeContentParams(1, 1, 'This is changed cell!')

    /* const element = document.querySelector('table tbody').querySelector('tr:nth-child(2)').querySelector('td:nth-child(2)');
    element.textContent = 'This is changed cell!'; */
}
