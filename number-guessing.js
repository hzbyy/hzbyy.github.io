const submitGuess = document.getElementById('submit-guess');
const guessInput = document.getElementById('guess-input');
const hint = document.getElementById('hint');

let randomNumber = Math.floor(Math.random() * 100) + 1;

submitGuess.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    hint.textContent = 'Please enter a valid number.';
  } else {
    if (guess < randomNumber) {
      hint.textContent = 'Too low!';
    } else if (guess > randomNumber) {
      hint.textContent = 'Too high!';
    } else {
      hint.textContent = 'Congratulations! You guessed the number.';
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
  }
  guessInput.value = '';
});