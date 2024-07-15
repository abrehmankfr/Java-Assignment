 // Store a secret number (between 1 and 10)
 var secretNumber = 7;

 // Prompt user to guess the secret number
 var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

 // Check the user's guess
 if (userGuess === secretNumber) {
     document.write("Bingo! Correct answer");
 } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
     document.write("Close enough to the correct answer");
 } else {
     document.write("Sorry, incorrect guess");
 }