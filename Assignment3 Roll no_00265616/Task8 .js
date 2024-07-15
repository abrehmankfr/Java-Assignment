 // a. Counting: 1, 2, 3, ..., 15
 document.write("<h2>a. Counting:</h2>");
 for (var i = 1; i <= 15; i++) {
     document.write(i + ", ");
 }

 // b. Reverse counting: 10, 9, ..., 1
 document.write("<h2>b. Reverse counting:</h2>");
 for (var j = 10; j >= 1; j--) {
     document.write(j + ", ");
 }

 // c. Even: 0, 2, 4, ..., 20
 document.write("<h2>c. Even:</h2>");
 for (var k = 0; k <= 20; k += 2) {
     document.write(k + ", ");
 }

 // d. Odd: 1, 3, 5, ..., 19
 document.write("<h2>d. Odd:</h2>");
 for (var l = 1; l <= 19; l += 2) {
     document.write(l + ", ");
 }

 // e. Series: 2k, 4k, 6k, ..., 20k
 document.write("<h2>e. Series:</h2>");
 for (var m = 1; m <= 10; m++) {
     document.write((2 * m) + "k, ");
 }