// Get input from the user
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Check the operation and perform the calculation
let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            console.log("Division by zero is not allowed.");
        }
    } else if (operation === '%') {
        if (secondNumber !== 0) {
            result = firstNumber % secondNumber;
        } else {
            console.log("Modulo operation by zero is not allowed.");
        }
    } else {
        console.log("Invalid operation. Please enter +, -, *, /, or %.");
    }

    // Display the result
    if (result !== undefined) {
        console.log(`The result of ${firstNumber} ${operation} ${secondNumber} is: ${result}`);
    }
}
