function getAttributes() {

    const linkelement = document.getElementById('someId');

    console.log(linkelement.getAttribute('href'));
    console.log(linkelement.getAttribute('hreflang'));
    console.log(linkelement.getAttribute('rel'));
    console.log(linkelement.getAttribute('target'));
    console.log(linkelement.getAttribute('type'));
}