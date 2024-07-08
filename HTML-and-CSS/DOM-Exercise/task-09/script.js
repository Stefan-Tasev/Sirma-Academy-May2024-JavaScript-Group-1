function getOptions() {

    const selectElement = document.getElementById('mySelect');

    const listItems = Array.from(selectElement.children).map(el => el.textContent);

    alert(`count dropdown list is ${listItems.length} - ${listItems.join(', ')}`)
}