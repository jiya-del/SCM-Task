// Variables
let cart = [];
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("cartModal");
const closeBtns = document.querySelectorAll(".close-btn");
const cartItemsList = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const proceedToPaymentButton = document.getElementById("proceedToPaymentButton");
const paymentModal = document.getElementById("paymentModal");
const successModal = document.getElementById("successModal");
const creditCardPaymentButton = document.getElementById("creditCardPaymentButton");
const paytmPaymentButton = document.getElementById("paytmPaymentButton");
const DebitcardPaymentButton = document.getElementById("DebitcardPaymentButton");
const googlepayPaymentButton = document.getElementById("googlepayPaymentButton");

// Event listener for 'Add to Cart' buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const bookTitle = event.target.dataset.book;
        const bookPrice = parseFloat(event.target.dataset.price);
        addToCart(bookTitle, bookPrice);
    });
});

// Add item to cart
function addToCart(bookTitle, bookPrice) {
    cart.push({ title: bookTitle, price: bookPrice });
    updateCart();
}

// Update cart display
function updateCart() {
    // Update cart button text
    cartButton.innerText = `Cart (${cart.length})`;

    // Update cart modal contents
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.title} - ${item.price} Rs`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        total += item.price;
    });
    totalPriceElement.innerText = `Total: ${total.toFixed(2)} Rs`;
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Open the cart modal
cartButton.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

// Close the cart modal
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        cartModal.style.display = "none";
        paymentModal.style.display = "none";
        successModal.style.display = "none";
    });
});

// Open payment modal after clicking 'Proceed to Payment'
proceedToPaymentButton.addEventListener("click", () => {
    cartModal.style.display = "none";
    paymentModal.style.display = "flex";
});

// Payment options (Credit Card and PayPal)
creditCardPaymentButton.addEventListener("click", () => {
    processPayment("Credit Card");
});

paytmPaymentButton.addEventListener("click", () => {
    processPayment("Paytm");
});
DebitcardPaymentButton.addEventListener("click", () => {
    processPayment("Debit Card");
});
googlepayPaymentButton.addEventListener("click", () => {
    processPayment("Google Pay");
});

// Simulate successful payment
function processPayment(paymentMethod) {
    setTimeout(() => {
        alert(`Payment successful via ${paymentMethod}`);
        successModal.style.display = "flex";
        cart = [];  // Clear the cart after successful payment
        updateCart();
        paymentModal.style.display = "none";
    }, 2000); // Simulating a payment delay
}