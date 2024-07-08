function highlightWords() {

    Array.from(document.querySelectorAll('b')).map(word => word.style.textDecoration = 'underline');
}

function removeHightlights() {

    Array.from(document.querySelectorAll('b')).map(word => word.style.textDecoration = 'none');
}