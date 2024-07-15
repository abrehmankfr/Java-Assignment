function calculateDigitMean(number) {
    // Convert the number to a string to iterate through its digits
    const numString = Math.abs(number).toString();

    // Calculate the sum of all digits
    const digitSum = Array.from(numString).reduce((sum, digit) => sum + parseInt(digit, 10), 0);

    // Calculate the mean
    const digitMean = digitSum / numString.length;

    return digitMean;
}

// Example usage
const result1 = calculateDigitMean(42);
const result2 = calculateDigitMean(12345);
const result3 = calculateDigitMean(666);

document.write("<br>Input<br>  "+"<br>42<br><br>")
document.write("12345<br><br>")
document.write("666<br><br>")


document.write("Output : <br>"+result1+"<br><br>");  // Output: 6
document.write("<br>"+result2+"<br><br>");  // Output: 3
document.write("<br>"+result3+"<br><br>");  // Output: 3
