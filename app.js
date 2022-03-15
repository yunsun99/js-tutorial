const scopeForm = document.querySelector('#scopeForm');
const guessingForm = document.querySelector('#guessingForm');

function handleGuessingForm(event) {
  event.preventDefault();
  const scope = document.querySelector('#scope').value;
  const guessedString = document.querySelector('#guessedNumber').value;
  const guessedNumber = parseInt(guessedString);
  const chosenNumber = document.querySelector('#chosenNumber');
  const result = document.querySelector('#result');
  const randomNumber = Math.random() * scope;
  const ceiledNumber = Math.ceil(randomNumber);

  chosenNumber.innerText = `You chose: ${guessedNumber}, the machine chose: ${ceiledNumber}`;
  if (guessedNumber === ceiledNumber) result.innerText = 'You won!';
  else result.innerText = 'You lost!';
}

guessingForm.addEventListener('submit', handleGuessingForm);
