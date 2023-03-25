(() => {
    // Math.FLOOR = Method to round down this numb er to the nearest integer
    // Math.random()= generate a random number between 0 and 1 
    // We add 1 to the result to get a number between 1 and 100 

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`The random number is ${randomNumber}`);
})();