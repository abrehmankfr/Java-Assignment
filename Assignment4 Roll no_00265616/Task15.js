// Ask the user for their age
var age = prompt("Please enter your age:");

// Convert the age to a number
age = parseInt(age);

// Check if the user entered a valid number
if (isNaN(age) || age <= 0) {
  alert("Please enter a valid age.");
} else {
  // Calculate the birth year
  var currentYear = new Date().getFullYear();
  var birthYear = currentYear - age;

  // Display the result in the browser
  document.write("<h2>Your birth year is: " + birthYear + "</h2>");
}