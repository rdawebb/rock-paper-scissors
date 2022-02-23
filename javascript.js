// possible options
const computerOptions = ["rock", "paper", "scissors"];

// function to provide random choice for computer
let computerPlay = () => {
  let x = Math.floor(Math.random() * 3); // random number between 1 and 3
  return computerOptions[x];
}

// function to play round
let playerScore = 0;
let computerScore = 0;

let playRound = (playerChoice, computerChoice) => {
  playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    return "Draw! Play again";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
}

// play 5 rounds
let game = () => {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerChoice = window.prompt('Choose rock, paper or scissors');
    const computerChoice = computerPlay();
    console.log("Computer chooses " + computerChoice);
    console.log(playRound(playerChoice, computerChoice));
  }
  if (playerScore > computerScore) {
    return "You win the game! Final score " + playerScore + " to " + computerScore;
  } else if (playerScore < computerScore) {
    return "Ah, you lose the game! Final score " + computerScore + " to " + playerScore;
  } else if (playerScore === computerScor) {
    return "Draw! You both finish with " + playerScore;
  }
}