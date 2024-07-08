function calculateVolume() {

    const radius = Number(document.querySelector('input[name=radius]').value);

    const volume = document.querySelector('input[name=volume]');

    let currentRadius = 4 * Math.PI * Math.pow(radius, 3) / 3;

    volume.removeAttribute('readonly');
    volume.placeholder = currentRadius.toFixed(4);
    volume.setAttribute('readonly', true)
}