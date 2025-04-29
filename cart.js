// script.js

let cartItems = [];
let totalPrice = 0;

const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');

// Update cart UI
function updateCart() {
  cartItemsList.innerHTML = ''; // Clear the current cart display

  // Loop through each item in the cart and display it
  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} (Qty: ${item.quantity})`;

    // Add increment and decrement buttons for quantity
    const qtyBtns = document.createElement('span');
    
    const increaseBtn = document.createElement('button');
    increaseBtn.textContent = '+';
    increaseBtn.addEventListener('click', () => updateQuantity(index, 1));
    
    const decreaseBtn = document.createElement('button');
    decreaseBtn.textContent = '-';
    decreaseBtn.addEventListener('click', () => updateQuantity(index, -1));

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => deleteFromCart(index));

    qtyBtns.appendChild(increaseBtn);
    qtyBtns.appendChild(decreaseBtn);
    
    li.appendChild(qtyBtns);
    li.appendChild(deleteBtn);
    
    cartItemsList.appendChild(li);
  });

  // Update total price
  totalPriceElement.textContent = totalPrice;
}

// Add item to cart
function addToCart(event) {
  const bookName = event.target.getAttribute('data-name');
  const bookPrice = parseFloat(event.target.getAttribute('data-price'));

  // Check if the item is already in the cart
  const existingItem = cartItems.find(item => item.name === bookName);
  
  if (existingItem) {
    // Increase the quantity if item is already in cart
    existingItem.quantity += 1;
    totalPrice += bookPrice;
  } else {
    // Add a new item to the cart
    cartItems.push({ name: bookName, price: bookPrice, quantity: 1 });
    totalPrice += bookPrice;
  }

  // Update the cart display
  updateCart();
}

// Delete item from cart
function deleteFromCart(index) {
  const itemToDelete = cartItems[index];
  totalPrice -= itemToDelete.price * itemToDelete.quantity;
  
  // Remove item from the cart
  cartItems.splice(index, 1);
  
  // Update the cart display
  updateCart();
}

// Update quantity of an item in the cart
function updateQuantity(index, change) {
  const item = cartItems[index];

  if (item.quantity + change > 0) {
    item.quantity += change;
    totalPrice += item.price * change;
  }

  // Update the cart display
  updateCart();
}

// Handle checkout button click
function checkout() {
  if (cartItems.length > 0) {
    alert`(Your total is $${totalPrice}. Thank you for your purchase!)`;
    
    // Clear the cart
    cartItems = [];
    totalPrice = 0;
    updateCart();
  } else {
    alert('Your cart is empty.');
  }
}

// Add event listeners for "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Add event listener for "Proceed to Checkout" button
checkoutButton.addEventListener('click', checkout);
