 // Arrays
 var a = [10, 20, 4, 40, 60, 70];
 var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // Function to compute the union of two arrays
 function computeUnion(arr1, arr2) {
     var resultArray = [...new Set([...arr1, ...arr2])];
     return resultArray;
 }

 // Compute the union of arrays a and b
 var unionResult = computeUnion(b, a);
 

 // Display original arrays
 document.write("<h2>Array a:</h2>");
 document.write("<p>" + a.join(', ') + "</p>");

 document.write("<h2>Array b:</h2>");
 document.write("<p>" + b.join(', ') + "</p>");

 // Display union result
 document.write("<h2>Union Result:</h2>");
 document.write("<p>" + unionResult.join(', ') + "</p>");