 // Given string
 var inputString = "The quick brown fox jumps over the lazy dog";

 // Convert the string to lowercase for case-insensitive matching
 var lowercaseString = inputString.toLowerCase();

 // Word to count occurrences
 var wordToCount = "the";

 // Use a regular expression to match the word globally
 var regex = new RegExp("\\b" + wordToCount + "\\b", "g");
 var occurrences = (lowercaseString.match(regex) || []).length;

 // Displaying the result in the browser
 document.write("Text : " + inputString);
 document.write("<p>There are " + occurrences + " occurrence(s) of word '" +wordToCount  + "'</p>");