const words = ["banana", "apple", "mango", "grape", "peach", "kiwi", "orange"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attempts = 5;

function updateMessage(message) {
    document.getElementById("message").innerText = message;
}

function handleGuess() {
    const userGuess = document.getElementById("guessInput").value.trim().toLowerCase();
    document.getElementById("guessInput").value = "";

    if (userGuess === "") {
        updateMessage("Incorrect guess. You have " + attempts + " attempts left. Try again!");
        return;
    }

    attempts--;
    if (userGuess === secretWord) {
        updateMessage("Congratulations! You guessed the secret word!");
        document.getElementById("playAgain").style.display = "block";
    } else {
        if (attempts > 0) {
            updateMessage("Incorrect guess. You have " + attempts + " attempts left. Try again!");
        } else {
            updateMessage("Game over! The secret word was '" + secretWord + "'.");
            document.getElementById("playAgain").style.display = "block";
        }
    }
}

function resetGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    attempts = 5;
    updateMessage("Guess the secret word!");
    document.getElementById("playAgain").style.display = "none";
}

document.getElementById("submitGuess").addEventListener("click", handleGuess);
document.getElementById("playAgain").addEventListener("click", resetGame);