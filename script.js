
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;

    const input = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessBtn");
    const restartButton = document.getElementById("restartBtn");
    const message = document.getElementById("message");
    const attemptCount = document.getElementById("attemptCount");

    function checkGuess() {

        if (gameOver) return;

        const value = input.value.trim();
        const guess = Number(value);

        if (
            value === "" ||
            !Number.isInteger(guess) ||
            guess < 1 ||
            guess > 100
        ) {
            message.textContent = "⚠️ Enter a number between 1 and 100!";
            message.style.color = "red";
            return;
        }

        attempts++;
        attemptCount.textContent = attempts;

        if (guess === secretNumber) {

            message.textContent = "🎉 Congratulations! You Won!";
            message.style.color = "green";

            gameOver = true;
            guessButton.disabled = true;
            input.disabled = true;

        } else if (guess < secretNumber) {

            message.textContent = "📈 Too Low! Try a Higher Number.";
            message.style.color = "orange";

        } else {

            message.textContent = "📉 Too High! Try a Lower Number.";
            message.style.color = "red";

        }

        input.value = "";

        if (!gameOver) {
            input.focus();
        }
    }

    function restartGame() {

        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gameOver = false;

        input.value = "";
        input.disabled = false;

        guessButton.disabled = false;

        attemptCount.textContent = "0";

        message.textContent = "Let's start the game!";
        message.style.color = "#444";

        input.focus();
    }

    guessButton.addEventListener("click", checkGuess);

    restartButton.addEventListener("click", restartGame);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });

});