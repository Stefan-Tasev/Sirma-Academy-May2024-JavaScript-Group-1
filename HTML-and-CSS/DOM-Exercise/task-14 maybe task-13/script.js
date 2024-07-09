function createNewItem() {

    const button = document.querySelector('button');
    const item = document.querySelector('input[type=text]');
    const uList = document.getElementById('items');

    if (item.value != '') {

        const liElement = document.createElement('li');
        liElement.textContent = item.value;
        liElement.style.cursor = 'pointer'

        liElement.addEventListener('click', () => {

            item.value = liElement.textContent;
            liElement.remove();

        })

        uList.appendChild(liElement);
        item.value = '';

    }
}