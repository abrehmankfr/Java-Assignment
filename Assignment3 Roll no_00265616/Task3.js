// Initialize array with color names
var colors = ['Red', 'Green', 'Blue'];

// Function to display array in the browser
function displayArray() {
    document.write("Colors: " + colors.join(', ') + "<br><br>");
}

// A. Add color to the beginning of the array
var newColorA = prompt("A. Enter color to add to the beginning:");
colors.unshift(newColorA);
displayArray();

// B. Add color to the end of the array
var newColorB = prompt("B. Enter color to add to the end:");
colors.push(newColorB);
displayArray();

// C. Add two more colors to the beginning
colors.unshift('Yellow', 'Orange');
displayArray();

// D. Delete the first color in the array
colors.shift();
displayArray();

// E. Delete the last color in the array
colors.pop();
displayArray();

// F. Add color to a specific position/index
var indexF = prompt("F. Enter the index to add color:");
var newColorF = prompt("Enter color to add:");
colors.splice(indexF, 0, newColorF);
displayArray();

// G. Remove color(s) from a specific position/index
var indexG = prompt("G. Enter the index to delete color(s):");
var countG = prompt("Enter the number of colors to delete:");
colors.splice(indexG, countG);
displayArray();