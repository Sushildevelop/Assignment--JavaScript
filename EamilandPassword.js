// get the form and input elements 
const form1 = document.querySelector('form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const message = document.querySelector('#message')

// Add an event listener to the form submit button
form1.addEventListener('submit', function(e) {
    // Prevent the default form submission
    e.preventDefault();

    // validate the email and password input fields 
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (!emailValue.includes('@') || passwordValue.length < 8) {
        // DSIPLAY AN ERROR MESSAGE IF THE INPUT IS invalid
        message.textContent = 'Invalid email or password';
        message.style.color = 'red'

    } else {
        // Display a success message if the input is valid
        message.textContent = 'Valid email and password';
        message.style.color = 'green';
    }
})

// Define the list items array
const items = ['Item 1', 'Item 2', 'Item 3'];

// Get the button and list elements
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Initialize the item index
let index = 0;

// Add an event listener to the button
button.addEventListener('click', function() {
    if (index < items.length) {
        // Add the next item to the list if available
        const item = document.createElement('li');
        item.textContent = items[index];
        list.appendChild(item);

        // Increment the item index
        index++;
    } else {
        // Display a message if all items have been added
        const message = document.createElement('p');
        message.textContent = 'All items have been added.';
        document.body.appendChild(message);
    }
});