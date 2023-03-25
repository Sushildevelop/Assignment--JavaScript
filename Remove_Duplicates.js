function removeDuplicates(cart) {
    const uniqueCart = []
    cart.forEach(element => {
        if (!uniqueCart.includes(element)) {
            uniqueCart.push(element)
        }
    });
    return uniqueCart;
}

const cart = ["shoes", "pants", "shoes", "pants", "jeans"]
console.log(removeDuplicates(cart));