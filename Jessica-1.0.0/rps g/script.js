const choices = document.querySelectorAll('.choice');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

choices.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    playerDisplay.textContent = `You chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
    winnerDisplay.textContent = winner;
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "🎉 You win!";
  } else {
    return "😢 Computer wins!";
  }
}