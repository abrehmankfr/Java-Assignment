function numberToWords(number) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convertTwoDigit(num) {
        if (num < 10) {
            return units[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + units[num % 10] : "");
        }
    }

    function convertThreeDigit(num) {
        if (num < 100) {
            return convertTwoDigit(num);
        } else {
            return units[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " and " + convertTwoDigit(num % 100) : "");
        }
    }

    if (number === 0) {
        return "Zero";
    }

    if (number >= 1000) {
        return "Number is too large for this example.";
    }

    if (number >= 100) {
        return convertThreeDigit(number);
    } else {
        return convertTwoDigit(number);
    }
}

// Test cases
document.write(numberToWords(23)+"<br><br>");   // Output: Twenty Three
document.write(numberToWords(123));  // Output: One Hundred and Twenty Three
