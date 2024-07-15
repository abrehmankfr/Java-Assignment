
// Get the current date
const currentDate = new Date().getDate();

// Check if the date is less than the 16th
if (currentDate < 16) {
    document.write("<h1>First fifteen days of the month<h1>");
} else {
    document.write("<h1>Last days of the month<h1>");
}
