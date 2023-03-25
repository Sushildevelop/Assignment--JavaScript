function calculateRentalCost(days, carType) {
    let rentalCost = 0;
    switch (carType) {
        case 'economy':
            rentalCost = 25;
            break

        case 'compact':
            rentalCost = 35;
            break

        case 'intermidate':
            rentalCost = 50
            break

        case 'fullsize':
            rentalCost = 75
            break

        default:
            console.log("Invalid car Type");
            break

    }
    return rentalCost * days
}
console.log(calculateRentalCost(3, 'compact'));