var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var usDollarToPakRupeeRate = 155;
var saudiRiyalToPakRupeeRate = 41;

// Convert the total currency to Pakistani Rupees in a single expression
var totalPakRupees = (usDollars * usDollarToPakRupeeRate) + (saudiRiyals * saudiRiyalToPakRupeeRate);

// Display the result
document.write("<h1> Currancy in PKR</h1>")
document.write("Total currency in Pakistani : " + totalPakRupees + " PKR");
