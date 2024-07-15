// Initialize array with city names
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

// Initialize selected cities array
var selectedCities = [];

// Copy 3 elements to selected cities array
selectedCities = cities.slice(2, 4); // Assuming Islamabad and Quetta are at indices 2 and 3

// Display the original and selected cities arrays
document.write("Cities list: " + cities.join(', ') + "<br><br>");
document.write("Selected Cities: " + selectedCities.join(', ') + "<br>");