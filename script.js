document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const cartBtn = document.getElementById('cart-btn');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const loginModal = document.getElementById('login-modal');
    const cartModal = document.getElementById('cart-modal');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    let cart = [];

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeLoginBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            if (!cart.includes(product)) {
                cart.push(product);
                const li = document.createElement('li');
                li.textContent = product;
                cartItems.appendChild(li);
                cartCount.textContent = cart.length;
            }
        });
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Bem-vindo, ${username}!`);
        loginModal.style.display = 'none';
    });
});
