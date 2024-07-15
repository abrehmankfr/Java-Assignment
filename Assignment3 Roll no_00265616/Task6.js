 // Arrays
 var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
 var o = ["th", "st", "nd", "rd"];

 // Display choices
 for (var i = 0; i < aCities.length; i++) {
     var choiceNumber = i + 1;
     var ordinalSuffix;

     // Determine the ordinal suffix
     if (choiceNumber % 10 === 1 && choiceNumber !== 11) {
         ordinalSuffix = o[1];
     } else if (choiceNumber % 10 === 2 && choiceNumber !== 12) {
         ordinalSuffix = o[2];
     } else if (choiceNumber % 10 === 3 && choiceNumber !== 13) {
         ordinalSuffix = o[3];
     } else {
         ordinalSuffix = o[0];
     }

     // Display the choice
     document.write("<p>" + choiceNumber + ordinalSuffix + " choice is " + aCities[i] + "</p>");
 }