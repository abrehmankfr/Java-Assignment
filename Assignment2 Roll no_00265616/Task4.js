var tot_marks = prompt("Enter Total Marks: ");
var obt_marks = prompt("Enter Obtained Marks: ");
var percentage = (parseInt(obt_marks) / parseInt(tot_marks)) * 100;
var grade;
var rem;

document.write("<h1>Marks Sheet</h1><br><br>");
if(percentage >= 80){
    grade="A-One"
    rem="Excellent"
    document.write("Total Marks : " + tot_marks + "<br>")
    document.write("Marks Obtained: " + obt_marks + "<br>")
    document.write("Percentage : " + parseInt(percentage) + "%<br>")
    document.write("Grade : " + grade + "<br>")
    document.write("Remarks : " + rem + "<br>")
}
 else if(percentage >= 70){
        grade="A"
        rem="Good"
        document.write("Total Marks : " + tot_marks + "<br>")
        document.write("Marks Obtained: " + obt_marks + "<br>")
        document.write("Percentage : " + parseInt(percentage) + "%<br>")
        document.write("Grade : " + grade + "<br>")
        document.write("Remarks : " + rem + "<br>")
     }
else if(percentage >= 60){
        grade="B"
        rem="You need to Improve"
        document.write("Total Marks : " + tot_marks + "<br>")
        document.write("Marks Obtained: " + obt_marks + "<br>")
        document.write("Percentage : " + parseInt(percentage) + "%<br>")
        document.write("Grade : " + grade + "<br>")
        document.write("Remarks : " + rem + "<br>")
}
else if(percentage < 60){
    grade="Failed"
    rem="Sorry"
    document.write("Total Marks : " + tot_marks + "<br>")
    document.write("Marks Obtained: " + obt_marks + "<br>")
    document.write("Percentage : " + parseInt(percentage) + "%<br>")
    document.write("Grade : " + grade + "<br>")
    document.write("Remarks : " + rem + "<br>")
}
