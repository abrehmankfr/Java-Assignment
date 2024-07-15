// Get input from the user
let userInput = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (userInput % 2 === 0) {
    document.write(`The number ${userInput} is Even.`);
} else {
    document.write(`The number ${userInput} is Odd.`);
}
