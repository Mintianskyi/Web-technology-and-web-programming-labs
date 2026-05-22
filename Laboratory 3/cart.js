
let cart = [];

function addToCart(productId) {
    let product = catalogData.find(item => item.id === productId);
    
    let existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    renderCart();
}

function changeQuantity(productId, newQuantity) {
    let item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = parseInt(newQuantity) || 1;
        
        if (item.quantity < 1) {
            item.quantity = 1;
        }
    }
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartTotal = document.getElementById('cart-total-price');
    
    if (!cartContainer) return;
    
    cartContainer.innerHTML = "";
    let totalSum = 0;
    
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotal = item.price * item.quantity;
        totalSum += itemTotal;
        
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">${item.price} ₴</p>
                <input type="number" class="cart-item-qty" value="${item.quantity}" min="1" onchange="changeQuantity(${item.id}, this.value)">
                <p class="cart-item-subtotal">${itemTotal} ₴</p>
                <button class="cart-item-delete" onclick="removeFromCart(${item.id})">Видалити</button>
            </div>
        `;
    }
    
    if (cartTotal) {
        cartTotal.innerText = totalSum + " ₴";
    }
}

const orderBtn = document.getElementById('send-order-btn');
if (orderBtn) {
    orderBtn.onclick = () => {
        if (cart.length === 0) {
            alert("Ваш кошик порожній! Додайте товари.");
            return;
        }
        alert("Замовлення успішно відправлено!");
        cart = [];
        renderCart();
    };
}

const cartToggleBtn = document.getElementById('cart-toggle-btn');
const basketBox = document.getElementById('basket-box');

cartToggleBtn.addEventListener('click', () => {
    basketBox.classList.toggle('open');
});