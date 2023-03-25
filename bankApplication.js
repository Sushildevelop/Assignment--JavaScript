// Desposit Function
const deposit = (customer, amount) => {
    customer.balance += amount;
    console.log(`Deposited ${amount} to ${customer.name}'s account. New balance is ${customer.balance}`);

}

// Withdrawal Function
const withdraw = (customer, amount) => {
    if (customer.balance >= amount) {
        customer.balance -= amount;
        console.log(`Withdrawn ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`);
    } else {
        console.log(`Insufficient balance in ${customer.name}'s account. Current balance is ${customer.balance}.`);
    }
}

const customer = { name: "shushil chuabey ", balance: 100 }

deposit(customer, 50)
withdraw(customer, 75)