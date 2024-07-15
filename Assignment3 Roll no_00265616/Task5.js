 // Sample array
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

 // Function to remove duplicates from an array
 function removeDuplicates(arr) {
     var uniqueArray = [];
     
     for (var i = 0; i < arr.length; i++) {
         if (uniqueArray.indexOf(arr[i]) === -1) {
             uniqueArray.push(arr[i]);
         }
     }

     return uniqueArray;
 }

 // Remove duplicates from the sample array
 var resultArray = removeDuplicates(arr1);

 // Display original array
 document.write("<h2>Original Array:</h2>");
 document.write("<p>" + arr1.join(', ') + "</p>");

 // Display array after removing duplicates
 document.write("<h2>Array without Duplicates:</h2>");
 document.write("<p>" + resultArray.join(', ') + "</p>");