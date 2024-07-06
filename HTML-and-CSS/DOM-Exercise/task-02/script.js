function getFormvalue() {

    const firstNameElement = document.querySelector('input[name=fname]');
    const lastNameElement = document.querySelector('input[name=lname]');

    const firstNameElementValue = firstNameElement.value;
    const lastNameElementValue = lastNameElement.value;

    console.log(firstNameElementValue);
    console.log(lastNameElementValue);
}