function roundToDecimalPlaces(number, decimalPlaces) {
    const multiplier = 10 ** decimalPlaces;
    const roundedNumber = Math.round(number * multiplier) / multiplier;
    return roundedNumber.toFixed(decimalPlaces);
}

// Test cases
const result1 = roundToDecimalPlaces(16.765, 2);
const result2 = roundToDecimalPlaces(12.37982, 2);
const result3 = roundToDecimalPlaces(-9.3079499, 4);


document.write("Input<br><br>"+"16.765, 2<br><br>")
document.write("12.37982, 2<br><br>")
document.write("-9.3079499, 4<br><br>")


document.write("Output<br><br>"+result1+"<br><br>");  // Output: 16.77
document.write(result2+"<br><br>");  // Output: 12.38
document.write(result3+"<br><br>");  // Output: -9.3079
