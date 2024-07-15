// Array to store student names
var studentNames = ["John", "Jane", "Bob"];

// Array to store scores of students
var studentScores = [420, 480, 350];

// Total marks for each student
var totalMarks = 500;

// Display scores and percentages
document.write("<h2>Student Scores</h2>");

for (var i = 0; i < studentNames.length; i++) {
    var studentName = studentNames[i];
    var score = studentScores[i];
    
    // Calculate percentage
    var percentage = (score / totalMarks) * 100;

    // Display scores and percentages
    document.write("<p>" + studentName + "'s Score: " + score + " out of " + totalMarks + "</p>");
    document.write("<p>" + studentName + "'s Percentage: " + percentage.toFixed(2) + "%</p>");
}