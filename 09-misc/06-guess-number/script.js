// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    // Create a random number between 1 and 10:
    function randomNumber() {
        let num = parseInt(Math.random() * 10 + 1);
        return num;
    }

    function guess() {
        // Choose a random number:
        num = randomNumber();
        // Establish a count for the number of tries at maximum:
        let counter = 1;
        // Limit the number of tries to 5:
        let maxTries = 5;
        let userGuess = prompt("Guess the number (1 to 10): ");
        do {
            // If you tried too many times you loose:
            if (counter === maxTries) {
                alert("You have no more tries left. Press F5 to play again.");
            }
            // If you guess too low:
            else if (userGuess < num) {
                alert("Too low!");
                userGuess = prompt("Guess the number (1 to 10): ");
                counter++;
            // If you guess too high:
            } else {
                alert("Too high!");
                userGuess = prompt("Guess the number (1 to 10): ");
                counter++;
            }
        // Do this loop until the guess number is found:
        } while (userGuess != num)
        // When the number is found, Grats!
        if (userGuess = num) {
            alert("You guessed it! It took you " + counter + " tries to find it!\nPress F5 to play again.")
        }
    }
    guess();
})();
