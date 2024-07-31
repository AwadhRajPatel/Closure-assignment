function createCart() {
    let cartItems = [];

    function addToCart(productId, name, quantity, price) {
        let itemIndex = cartItems.findIndex(item => item.productId === productId);

        if (itemIndex !== -1) {
            // If item already exists in the cart, increment the quantity
            cartItems[itemIndex].quantity += quantity;
        } else {
            // If item does not exist in the cart, add a new item
            cartItems.push({
                productId: productId,
                name: name,
                quantity: quantity,
                price: price
            });
        }
    }

    function getCartItems() {
        return cartItems;
    }

    return {
        addToCart,
        getCartItems
    };
}

// Usage example:
const cart = createCart();
cart.addToCart(1, "Product A", 2, 10.0);
cart.addToCart(2, "Product B", 1, 15.0);
cart.addToCart(1, "Product A", 3, 10.0); // Adding the same product to increase quantity

console.log(cart.getCartItems());
