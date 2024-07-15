// Create a Date object for the current date and time
var currentDate = new Date("2015/Dec/5 23:08:16");
console.log(currentDate);
// Extract the hours
var currentHours = currentDate.getHours();

// Reset the date object an hour ahead
currentDate.setHours(currentHours );

// Display the updated date object in the browser
document.write("Current Date: " + currentDate +"<br><br>");
document.write("1 hour ago, it was " + currentDate );