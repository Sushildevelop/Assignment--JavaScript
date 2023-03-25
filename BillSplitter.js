function calculateBill(costPerdish, numberoFpeople) {
    const totalBill = costPerdish * numberoFpeople
    const billpErson = totalBill / numberoFpeople
    return {
        totalBill,
        billpErson
    }
}
const bill = calculateBill(100, 200)
console.log("totalBill ", bill.totalBill);
console.log("Bill of person ", bill.billpErson);