let totalCost = (cart) =>
    cart.reduce((total, items) => total + (items.unitPrice * items.quantity), 0);
// Toatl = accumulator or perious Value and Items= CurrenTvalue 
// perivousVALUE=0



const cart = [{ unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 2.5, quantity: 3 }
]; // Array of the object /// means inside array the object is present

console.log(totalCost(cart));