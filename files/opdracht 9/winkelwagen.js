document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');

    if (sessionStorage.length === 0) {
        cartContainer.innerHTML = '<p>Je winkelmandje is leeg.</p>';
        return;
    }

    for (let i = 0; i < sessionStorage.length; i++) {
        const pizza = sessionStorage.key(i);
        const count = sessionStorage.getItem(pizza);

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
      <p><strong>${pizza}</strong>: ${count}</p>
      <button class="remove-btn" data-pizza="${pizza}">Verwijder</button>
    `;
        cartContainer.appendChild(cartItem);
    }

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => {
            const pizza = button.dataset.pizza;
            sessionStorage.removeItem(pizza);
            alert(`${pizza} verwijderd uit winkelmandje.`);
            location.reload();
        });
    });
});
