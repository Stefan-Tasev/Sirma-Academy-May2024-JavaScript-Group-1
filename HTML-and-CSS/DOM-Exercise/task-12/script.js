function getSize() {

    const width = window.innerWidth;
    const height = window.innerHeight;
    const paragraf = document.querySelector('p');

    paragraf.textContent = `Width: ${width}px\nHeight: ${height}px`;
    paragraf.style.margin = '10% 30%';
    paragraf.style.padding = '10px'
    paragraf.style.fontSize = '30px'
}