const calculateDiscountPercentage = (originalPrice, DiscountPrice) =>
    ((originalPrice - DiscountPrice) / originalPrice * 100).toFixed(2);
// TOFixed is used to round the result to two decimal Place

console.log(calculateDiscountPercentage(100, 75));