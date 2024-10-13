const radios = document.querySelectorAll('input[name="unit"]');
const totalPrice = document.getElementById('total-price');
const dropdowns2 = document.getElementById('dropdowns2');

radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        updatePrice(e.target.value);
    });
});

function updatePrice(unit) {
    let price = 10;
    dropdowns2.style.display = 'none';

    if (unit === "2") {
        price = 18;
        dropdowns2.style.display = 'block';
    } else if (unit === "3") {
        price = 24;
    }

    totalPrice.textContent = `$${price}.00 USD`;
}