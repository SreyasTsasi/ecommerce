// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');
    const clearCartButton = document.getElementById('clear-cart');

    // Retrieve cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart items in the DOM
    function updateCart() {
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.title}</h3>
                        <p>: ${item.title}$${item.price.toFixed(2)}</p>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
        }
    }

    // Initial cart update
    updateCart();

    // Checkout button click event
    checkoutButton.addEventListener('click', () => {
        // Implement your checkout logic here
        alert('Checkout functionality to be implemented.');
    });

    // Clear cart button click event
    clearCartButton.addEventListener('click', () => {
        // Clear the cart and update the UI
        localStorage.removeItem('cart');
        cart.length = 0;
        updateCart();
    });
});
