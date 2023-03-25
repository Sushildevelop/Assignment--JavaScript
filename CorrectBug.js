let arr = [2, 3, 4, 5]

function fixcart(arr) {
    const fixedCart = arr.map(quantity => quantity * 2)
    return fixedCart;
}
console.log(fixcart(arr));