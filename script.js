
// This is the script for a game of rock paper scissors

let playerScore = 0;
let computerScore = 0;
let OPTIONS = ['r','p','s'];
let PLAYGAME = true;
let round = 1;

let playerChoice = 'r';
let computerChoice = 'r';

function playRockPaperScissors(){

  introduceRound();

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  displayChoices(playerChoice, computerChoice);

  winner = compareChoices(playerChoice, computerChoice);
  updateScores(winner);
  displayScores();

  PLAYGAME = askToContinue();
}

function introduceRound(){
  console.log('')
  console.log(`round: ${round} has begun`)
  console.log('')
  round++;
}

function getPlayerChoice(){
  choice = '';
  while (!OPTIONS.includes(choice)){
    choice = prompt("r,p or s: what is your choice?");
  }
  return choice;
}

function getComputerChoice(){
  // randomly pick r p or s
  choice = Math.floor(3*Math.random());
  choice = OPTIONS[choice];
  return choice;
}

function displayChoices(playerChoice, computerChoice){
  console.log('Choices:')
  console.log(`Player: ${playerChoice}`);
  console.log(`Computer: ${computerChoice}`);
}

function compareChoices(playerChoice, computerChoice){
  let DRAW = 'DRAW';
  let COMPUTERWIN = 'COMPUTERWIN';
  let PLAYERWIN = 'PLAYERWIN';

  if (playerChoice == computerChoice) return DRAW;

  const beats = {
    r: 's',
    p: 'r',
    s: 'p'
  };

  return beats[playerChoice] === computerChoice ? PLAYERWIN : COMPUTERWIN;

  playerChoice = OPTIONS.indexOf(playerChoice);
  computerChoice = OPTIONS.indexOf(computerChoice);

  // replace with switch statements
  // or a table
  // or some logic saying in [r,p,s] the follwing val beats the preceding 
  // r loses to p, p loses to s, s loses to r
  // [0,1,2]
  // if same val -> DRAW
  // p-r    s-p    r-s
  // 1-0=1, 2-1=1, 0-2=-2
  // +3 to all
  // 4,4,1
  // %3 -> 1,1,1
  // (((playerChoice - computerChoice)+3) % 3) = 1 if pWin or 2 if CWin or 0 if DRAW


  // r-p = 0-1 = -1
  // +3 -> 2 -> %3 -> 2

  if (playerChoice == computerChoice){
    return DRAW
  }
  if ((((playerChoice - computerChoice) +3) %3 ) == 1) {
    return PLAYERWIN;
  } else {
    return COMPUTERWIN;
  }

  // if (playerChoice == 'r'){
  //   if (computerChoice == 'p'){
  //     return COMPUTERWIN;
  //   } else if (computerChoice == 's'){
  //     return PLAYERWIN;
  //   }
  // }
  // if (playerChoice == 'p'){
  //   if (computerChoice == 's'){
  //     return COMPUTERWIN;
  //   } else if (computerChoice == 'r'){
  //     return PLAYERWIN;
  //   }
  // }
  // if (playerChoice == 's'){
  //   if (computerChoice == 'r'){
  //     return COMPUTERWIN;
  //   } else if (computerChoice == 'p'){
  //     return PLAYERWIN;
  //   }
  // }
}

function updateScores(winner){
  console.log('')
  console.log('The result is..')
  if (winner == 'DRAW'){
    console.log("nobody won");
  } else if (winner == 'PLAYERWIN'){
    playerScore++;
    console.log("Player won!");
  } else {
    computerScore++;
    console.log("computer won!")
  }
}

function displayScores(){
  console.log(`SCORES`)
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
}

function askToContinue(){
  if (prompt('input n to stop playing') == 'n'){
    return false
  } else {
    return true
  }
}

while (PLAYGAME == true){
  playRockPaperScissors();
}


