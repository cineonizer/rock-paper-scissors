const winOutcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
let playerScore = 0;
let computerScore = 0;
function getPlayerChoice() {
    let playerChoice = '';
    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        // playerChoice = prompt('Make your move: rock, paper, or scissors?').toLowerCase();
        playerChoice = 'rock'
    }
    return playerChoice;
}
function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    return computerChoice;
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('Draw. Redo.');
        return playRound(getPlayerChoice(), getComputerChoice());
    }
    else if (winOutcomes[playerChoice] === computerChoice) {
        console.log('You win!') //(+ playerChoice[0].toUpperCase() + playerChoice.slice(1) + ' beats ' + computerChoice);
        return playerScore += 1;
    }
    else {
        console.log('You lose.') //(+ computerChoice[0].toUpperCase() + computerChoice.slice(1) + ' beats ' + playerChoice);
        return computerScore += 1;
    }
}
function playGame() {
    let numberOfRounds = 5;
    // while (numberOfRounds % 2 === 1 && numberOfRounds > 3) {
    //     numberOfRounds = prompt('How many rounds you want to play?');
    // }
    for (let i = 0; i < numberOfRounds; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore > computerScore) {
        console.log('-------------------\n' + 'You won ' + playerScore + ' out of ' + numberOfRounds + '!');
    }
    else {
        console.log('-------------------\n' + 'You lost ' + computerScore + ' out of ' + numberOfRounds + '.');
    }
}
playGame();