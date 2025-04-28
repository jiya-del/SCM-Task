// Function to add food to cart
function addToCart(event) {
    const foodCard = event.target.closest('.food-card');
    const foodTitle = foodCard.querySelector('p').textContent;
    const foodPrice = foodCard.querySelector('span').textContent;
    const foodImage = foodCard.querySelector('img').src;

    const cartItem = {
        title: foodTitle,
        price: foodPrice,
        image: foodImage
    };

    // Get the current cart from localStorage, or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(cartItem);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${foodTitle} added to cart`);
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});