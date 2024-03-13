//scoring assignment
let playerScore = 0;
let compScore = 0;

//create a function that get lets the computer choose between rock, paper and scissors
function getComputerChoice() {
  let randNumb = Math.floor(Math.random() * 3) + 1;
  if (randNumb == 1) {
    return "rock";
  } else if (randNumb == 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function userPrompt() {
  let userChoice = prompt("Rock, Paper or Scissor").toLocaleLowerCase();
  return userChoice;
}

let computerSelection = getComputerChoice();

//game function
function playGame() {
  playRound(userPrompt, computerSelection);
  console.log(`PLAYER POINTS:${playerScore}COMPUTER SCORE:${compScore}`);
  playRound(userPrompt, computerSelection);
  console.log(`PLAYER POINTS:${playerScore}COMPUTER SCORE:${compScore}`);
  playRound(userPrompt, computerSelection);
  console.log(`PLAYER POINTS:${playerScore}COMPUTER SCORE:${compScore}`);
  playRound(userPrompt, computerSelection);
  console.log(`PLAYER POINTS:${playerScore}COMPUTER SCORE:${compScore}`);
  playRound(userPrompt, computerSelection);
  console.log(`PLAYER POINTS:${playerScore}COMPUTER SCORE:${compScore}`);
  if (playerScore > compScore) {
    console.log("You win");
  } else if(playerScore < compScore); {
  console.log("Computer wins");
  }
}

//a function that plays a single round of Rock Paper Scissors

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = userPrompt();
  console.log("YOU: " + playerSelection + " | COMPUTER: " + computerSelection);
  if (playerSelection == computerSelection) {
    console.log("DRAW!, Both of you selected: " + playerSelection);
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    playerScore += 1;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    playerScore += 1;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    compScore += 1;
    return "You lost! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    compScore += 1;
    return "You lost! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    compScore += 1;
    return "You lost! " + playerSelection + " beats " + computerSelection;
  }
}

playGame();
//console.log(playGame(userPrompt, computerSelection));
//aaaaa